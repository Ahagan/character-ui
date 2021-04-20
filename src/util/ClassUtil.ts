export class ClassUtil {
  /**
   * Given class names, pre-pend the character-ui class name
   * @param className the classname(s) to wrap with the character-ui class name
   * @returns
   */
  public static makeCUIClass(className: string) {
    const characterUIClassName = 'cui';

    if (!className) {
      return '';
    }

    const parts = className.split(' ');

    return `${characterUIClassName}-` + parts.join(` ${characterUIClassName}-`);
  }
}
