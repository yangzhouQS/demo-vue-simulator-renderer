```ts

import { Asset } from '../../assets';
import {
  IPublicTypeNodeInstance,
  IPublicTypeProjectSchema,
  IPublicTypeComponentSchema,
} from './';

export interface IPublicTypeSimulatorRenderer<Component, ComponentInstance> {
  readonly isSimulatorRenderer: true;
  autoRepaintNode?: boolean;
  
  // 所有依赖的组件
  components: Record<string, Component>;
  rerender: () => void;
  
  // 根据协议描述创建一个组件实例返回
  createComponent(
    schema: IPublicTypeProjectSchema<IPublicTypeComponentSchema>,
  ): Component | null;
  
  
  // 根据组件名称获取组件实例
  getComponent(componentName: string): Component;
  
  // 
  getClosestNodeInstance(
    from: ComponentInstance,
    nodeId?: string,
  ): IPublicTypeNodeInstance<ComponentInstance> | null;
  
  // 根据实例查询组件
  findDOMNodes(instance: ComponentInstance): Array<Element | Text> | null;
  
  // 获取某个元素相对于 浏览器视窗（可见区域） 的位置信息
  getClientRects(element: Element | Text): DOMRect[];
  setNativeSelection(enableFlag: boolean): void;
  setDraggingState(state: boolean): void;
  setCopyState(state: boolean): void;
  loadAsyncLibrary(asyncMap: { [index: string]: any }): void;
  clearState(): void;
  stopAutoRepaintNode(): void;
  enableAutoRepaintNode(): void;
  run(): void;
  load(asset: Asset): Promise<any>;
}


```
