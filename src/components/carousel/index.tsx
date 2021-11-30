/*
 * @Author: your name
 * @Date: 2021-11-30 09:54:18
 * @LastEditTime: 2021-11-30 09:55:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\carousel\index.tsx
 */

interface IProps {
  children: React.ReactNode | Array<React.ReactNode>;
}

function Carousel (Props: IProps) {
  const { children } = Props;

  console.log(children);

  return (
    <>
    </>
  )
}

export default Carousel;