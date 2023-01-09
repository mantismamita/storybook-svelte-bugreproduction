export const focusable =
  'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls], summary, [tabindex]:not([tabindex^="-"])';

const focusActiveElement = (e: KeyboardEvent, active: HTMLElement) => {
  if (document.activeElement === active) {
    active.focus();
    e.preventDefault();
  }
};

export const trapFocus = function (e: KeyboardEvent, ref: HTMLElement) {
  const elements: HTMLElement[] = Array.from(ref.querySelectorAll(focusable));

  if (e.key === 'Tab' || e.keyCode === 9) {
    const first = elements[0];
    const last = elements[elements.length - 1];

    if (e.shiftKey) {
      /* shift + tab */
      focusActiveElement(e, first);
    } else {
      /* tab */
      focusActiveElement(e, last);
    }
  }
};

export const closeOnExit = (e: KeyboardEvent, ref: HTMLElement, cb: () => void) => {
  const elements: HTMLElement[] = Array.from(ref.querySelectorAll(focusable));

  if (e.code === 'Escape') {
    cb();
  }

  if (e.key === 'Tab' || e.keyCode === 9) {
    const first = elements[0];
    const last = elements[elements.length - 1];

    if (e.shiftKey) {
      /* shift + tab */
      if (document.activeElement === first) {
        cb();
      }
    } else {
      /* tab */
      if (document.activeElement === last) {
        cb();
      }
    }
  }
};

export const setTabindex = function (this: number, node: Element) {
  const elements = Array.from(node.querySelectorAll(focusable));

  elements.map((el) => {
    el.setAttribute('tabindex', this.toString());
  });
};
