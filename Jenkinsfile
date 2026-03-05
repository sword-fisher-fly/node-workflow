pipeline {
    agent  any

    parameters {
        string(name:'TAG_NAME',defaultValue: '',description:'')
        string(name:'branch',defaultValue: 'master',description:'branch')
    }

    environment {
        DOCKER_CREDENTIAL_ID = 'dockerhub-id'
        GITHUB_CREDENTIAL_ID = 'gitlab_credential_test'
        KUBECONFIG_CREDENTIAL_ID = 'demo-kubeconfig'
        REGISTRY = 'docker.io'
        DOCKERHUB_NAMESPACE = 'docker_username'
        GITHUB_ACCOUNT = 'kubesphere'
        APP_NAME = 'node-demo-jenkinsfile' 
        FEISHU_WEBHOOK_URL = 'https://open.feishu.cn/open-apis/bot/v2/hook/182aa95d-ee6a-4ecb-8c63-3a97556e86f4'
    }
    
    tools {
        nodejs 'nodejs23'
    }

    stages {
        stage ('Checkout SCM') {
          steps {
            withCredentials([gitUsernamePassword(credentialsId: env.GITHUB_CREDENTIAL_ID, gitToolName: 'git-tool')]) {
              sh '''
                rm -rf node-demo  
                git clone http://gitlab.lionaitech.com/chery-devops-tools/node-demo.git
                cd node-demo      
                git pull
                git checkout ${branch}
                '''
              }
          }
        }

        stage ('Compile') {
          steps {
            sh ''' 
             cd node-demo
             npm install
             npm run build
            '''
          }
        }

        stage ('Run') {
          when{
            expression{ params.branch == 'master'}
          }
          steps{
            withEnv(['JENKINS_NODE_COOKIE=dontkillme']) {
              sh '''
                cd node-demo
                nohup npm run dev &
              '''
              }
          } 
        }
    }
    post {
      success {
        script {
          sendFeishuNotice("✅ 构建成功", "项目 [${APP_NAME}] 流水线执行完成。分支: ${params.branch}版本: ${params.TAG_NAME} 构建建编号: ${env.BUILD_NUMBER}", "#00CC00")
        }
      }
      failure {
        script {
          sendFeishuNotice("❌ 构建失败", "项目 [${APP_NAME}] 流水线执行失败，请尽快排查！构建建编号: ${env.BUILD_NUMBER}", "#FF0000")
        }
      }
    }
}

def sendFeishuNotice(String title, String content, String color) {
    def json = """
    {
        "msg_type": "interactive",
        "card": {
            "config": { "update_multi": true },
            "header": {
                "template": "${color == '#FF0000' ? 'red' : 'green'}",
                "title": { "content": "${title}", "tag": "plain_text" }
            },
            "elements": [
                {
                    "tag": "div",
                    "text": { "content": "详细内容: ${content}", "tag": "lark_md" }
                },
                {
                    "tag": "hr"
                },
                {
                    "tag": "action",
                    "actions": [
                        {
                            "tag": "button",
                            "text": { "content": "查看 Jenkins 运行日志", "tag": "plain_text" },
                            "type": "default",
                            "url": "${env.BUILD_URL}"
                        }
                    ]
                }
            ]
        }
    }
    """
    sh "curl -X POST -H 'Content-Type: application/json' -d '${json}' ${env.FEISHU_WEBHOOK_URL}"
}
