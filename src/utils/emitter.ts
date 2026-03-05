// 引入mitt
import mitt from "mitt"

// 调用mitt创建emitter，emitter可以绑定和触发事件
const emitter = mitt()

// emitter.on("test1", () => {
//     console.log("test1 is called")
// })

// emitter.on("test2", () => {
//     console.log("test2 is called")
// })

// setInterval(() => {
//     emitter.emit("test1", "test1 is emitted")
//     emitter.emit("test2", "test2 is emitted")
// }, 1000)

// setTimeout(() => {
//     emitter.off("test1")
//     emitter.off("test2")
// }, 5000)
// 导出emitter
export default emitter