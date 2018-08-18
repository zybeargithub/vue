/* @flow */

import type Watcher from './watcher'
import { remove } from '../util/index'

let uid = 0

/**
 * A dep is an observable that can have multiple
 * directives（指令） subscribing(订阅) to it.
 */
export default class Dep {
  static target: ?Watcher;
  id: number;
  subs: Array<Watcher>;

  constructor () {
    this.id = uid++
    this.subs = []
  }

  // 添加 watcher 对象
  addSub (sub: Watcher) {
    this.subs.push(sub)
  }

  // 移除 watcher 对象
  removeSub (sub: Watcher) {
    remove(this.subs, sub)
  }

  depend () {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  // 发布通告
  notify () {
    // stabilize the subscriber list first
    const subs = this.subs.slice()
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null // 全局对象
const targetStack = [] // target的栈对象

export function pushTarget (_target: Watcher) {
  if (Dep.target) {
    targetStack.push(Dep.target)
  }

  Dep.target = _target
}

export function popTarget () {
  Dep.target = targetStack.pop()
}
