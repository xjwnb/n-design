import { useEffect, useState } from "react";
import Style from "./index.module.scss";
import { Left, Right } from "../../Icons/icon/index";

interface IProps {
  defaultPageSize?: number;
  total: number;
}

function Pagination(Props: IProps) {
  const { defaultPageSize = 10, total = 0 } = Props;

  const [lastPage, setlastPage] = useState(1);

  useEffect(() => {
    // console.log(defaultPageSize);
    setlastPage(Math.ceil(total / defaultPageSize) || 1);
  }, [defaultPageSize, total]);

  return (
    <div className={[Style.n_pagination].join(" ")}>
      <div className={[Style.n_pagination_content].join(" ")}>
        <PaginationButton>
          <Left />
        </PaginationButton>
        <PaginationButton>1</PaginationButton>

        {lastPage > 1 && <PaginationButton>{lastPage}</PaginationButton>}

        <PaginationButton>
          <Right />
        </PaginationButton>
      </div>
    </div>
  );
}

/**
 * 分页按钮小组件
 */
interface btnProps {
  children: any;
}

function PaginationButton(Props: btnProps) {
  const { children } = Props;

  return (
    <div className={[Style.n_pagination_button].join(" ")}>{children}</div>
  );
}

export default Pagination;
