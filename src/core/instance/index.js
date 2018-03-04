import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// VUE 渲染流程
// 1、new Vue，执行初始化
// 2、挂载$mount方法，通过自定义Render方法、template、el等生成Render函数
// 3、通过Watcher监听数据的变化
// 4、当数据发生变化时，Render函数执行生成VNode对象
// 5、通过patch方法，对比新旧VNode对象，通过DOM Diff算法，添加、修改、删除真正的DOM元素

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
// 渲染的核心方法，用来生成render函数和vNode
renderMixin(Vue)

export default Vue
