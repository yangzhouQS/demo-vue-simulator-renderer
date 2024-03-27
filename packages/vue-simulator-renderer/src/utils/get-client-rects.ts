import { isElement } from '@knxcloud/lowcode-utils';

// a range for test TextNode clientRect
const cycleRange = document.createRange();

/**
 * 获取某个元素相对于 浏览器视窗（可见区域） 的位置信息
 * @param node
 */
export function getClientRects(node: Element | Text) {
  if (!node.parentNode) return [];

  if (isElement(node)) {
    return [node.getBoundingClientRect()];
  }

  cycleRange.selectNode(node);
  return Array.from(cycleRange.getClientRects());
}
