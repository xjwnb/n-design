/*
 * @Author: your name
 * @Date: 2021-12-30 14:05:27
 * @LastEditTime: 2021-12-30 16:57:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \n-design\src\components\transfer\index.tsx
 */
import React, { useState, useEffect, BaseSyntheticEvent } from "react";
import Style from "./index.module.scss";
import { Checkbox, Button } from "../index";
import { Left, Right } from "../../Icons/icon/index";

interface DataSourceParam {
  key: string;
  title: string;
  description: string;
  disabled?: boolean;
  label?: string;
}

interface IProps {
  dataSource: Array<DataSourceParam>;
  titles: string[];
  targetKeys: string[];
  selectedKeys: string[];
  disabled?: boolean;
  oneWay?: boolean;
  style?: React.CSSProperties;
  render?: (item: DataSourceParam) => string;

  onChange?: (
    nextTargetKeys: string[],
    direction: "left" | "right",
    moveKeys: string[]
  ) => void;
  onScroll?: (direction: "left" | "right", e: BaseSyntheticEvent) => void;
  onSelectChange?: (
    sourceSelectedKeys: string[],
    targetSelectedKeys: string[]
  ) => void;
}

function Transfer(Props: IProps) {
  const {
    titles = ["left", "right"],
    dataSource = [],
    targetKeys = [],

    render,
  } = Props;

  const [sourceArr, setsourceArr] = useState<DataSourceParam[]>([]);
  const [targetArr, settargetArr] = useState<DataSourceParam[]>([]);
  // select
  const [sourceSelectKeys, setsourceSelectKeys] = useState<string[]>([]);
  const [targetSelectKeys, settargetSelectKeys] = useState<string[]>([]);
  // button
  const [canLeft, setcanLeft] = useState(true);
  const [canRight, setcanRight] = useState(true);
  // all
  const [leftIndeter, setleftIndeter] = useState(false);
  const [rightIndeter, setrightIndeter] = useState(false);
  const [leftAllVal, setleftAllVal] = useState(false);
  const [rightAllVal, setrightAllVal] = useState(false);

  useEffect(() => {
    let target: DataSourceParam[] = [],
      source: DataSourceParam[] = [];
    dataSource.forEach((item: DataSourceParam) => {
      if (targetKeys.includes(item.key)) {
        target.push(item);
      } else {
        source.push(item);
      }
    });
    setsourceArr(source);
    settargetArr(target);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    sourceSelectKeys.length ? setcanRight(false) : setcanRight(true);
    sourceSelectKeys.length ? setleftIndeter(true) : setleftIndeter(false);
    if (
      sourceSelectKeys.length === sourceArr.length &&
      sourceArr.length === 0
    ) {
      setleftAllVal(false);
    }
    if (
      sourceSelectKeys.length === sourceArr.length &&
      sourceSelectKeys.length > 0
    ) {
      setleftIndeter(false);
      setleftAllVal(true);
    } else {
      if (sourceSelectKeys.length > 0) {
        setleftIndeter(true);
        setleftAllVal(false);
      }
    }
    // eslint-disable-next-line
  }, [sourceSelectKeys]);

  useEffect(() => {
    targetSelectKeys.length ? setcanLeft(false) : setcanLeft(true);
    targetSelectKeys.length ? setrightIndeter(true) : setrightIndeter(false);
    if (
      targetSelectKeys.length === targetArr.length &&
      targetArr.length === 0
    ) {
      setrightAllVal(false);
    }
    if (
      targetSelectKeys.length === targetArr.length &&
      targetSelectKeys.length > 0
    ) {
      setrightIndeter(false);
      setrightAllVal(true);
    } else {
      if (targetSelectKeys.length > 0) {
        setrightIndeter(true);
        setrightAllVal(false);
      }
    }
    // eslint-disable-next-line
  }, [targetSelectKeys]);

  /**
   * left 选项 change 事件
   */
  const handleCheckboxChange = function (
    e: BaseSyntheticEvent,
    key: string,
    type: "left" | "right"
  ) {
    console.log(e.target.checked, key);
    switch (type) {
      case "left":
        if (e.target.checked) {
          setsourceSelectKeys([...sourceSelectKeys, key]);
        } else {
          setsourceSelectKeys(sourceSelectKeys.filter((item) => item !== key));
        }
        break;
      case "right":
        if (e.target.checked) {
          settargetSelectKeys([...targetSelectKeys, key]);
        } else {
          settargetSelectKeys(targetSelectKeys.filter((item) => item !== key));
        }
        break;
    }
  };

  /**
   * all checkbox Change
   */
  const checkboxAllChange = function (
    e: BaseSyntheticEvent,
    type: "left" | "right"
  ) {
    switch (type) {
      case "left":
        if (e.target.checked) {
          setleftAllVal(true);
          setsourceSelectKeys(sourceArr.map((item) => item.key));
        } else {
          setleftAllVal(false);
          setsourceSelectKeys([]);
        }
        break;
      case "right":
        if (e.target.checked) {
          setrightAllVal(true);
          settargetSelectKeys(targetArr.map((item) => item.key));
        } else {
          setrightAllVal(false);
          settargetSelectKeys([]);
        }
        break;
    }
  };

  /**
   * right btn
   */
  const handleRightBtn = function () {
    settargetArr([
      ...targetArr,
      ...dataSource.filter((item) => sourceSelectKeys.includes(item.key)),
    ]);
    setsourceArr(
      sourceArr.filter((item) => !sourceSelectKeys.includes(item.key))
    );
    setsourceSelectKeys([]);
  };

  /**
   * left btn
   */
  const handleLeftBtn = function () {
    setsourceArr([
      ...sourceArr,
      ...dataSource.filter((item) => targetSelectKeys.includes(item.key)),
    ]);
    settargetArr(
      targetArr.filter((item) => !targetSelectKeys.includes(item.key))
    );

    settargetSelectKeys([]);
  };

  return (
    <div className={[Style.n_transfer].join(" ")}>
      {/* left */}
      <div className={[Style.n_transfer_content_wrapper].join(" ")}>
        <div className={[Style.n_transfer_content_header_wrapper].join(" ")}>
          <div className={[Style.n_transfer_content_header_control].join(" ")}>
            <Checkbox
              indeterminate={leftIndeter}
              defaultChecked={leftAllVal}
              onChange={(e: BaseSyntheticEvent) => checkboxAllChange(e, "left")}
            ></Checkbox>
            <span>{`${sourceArr.length}项`}</span>
          </div>
          <div className={[Style.n_transfer_content_header_title].join(" ")}>
            {titles[0]}
          </div>
        </div>
        <div className={[Style.n_transfer_content].join(" ")}>
          {sourceArr.map((source) => {
            return (
              <div
                key={source.key}
                className={[Style.n_transfer_content_item].join(" ")}
              >
                <Checkbox
                  value={source.title}
                  onChange={(e: BaseSyntheticEvent) =>
                    handleCheckboxChange(e, source.key, "left")
                  }
                  defaultChecked={sourceSelectKeys.includes(source.key)}
                >
                  {`${render ? render(source) : source.title}`}
                </Checkbox>
              </div>
            );
          })}
        </div>
      </div>

      {/* middle */}
      <div className={[Style.n_transfer_middle_wrapper].join(" ")}>
        <div className={[Style.n_transfer_middle_content].join(" ")}>
          <span>
            <Button
              type="primary"
              size="small"
              disabled={canRight}
              icon={<Right color={canRight ? "#D9D9D9" : "#fff"} />}
              onClick={handleRightBtn}
            ></Button>
          </span>
          <span>
            <Button
              type="primary"
              size="small"
              disabled={canLeft}
              icon={<Left color={canLeft ? "#D9D9D9" : "#fff"} />}
              onClick={handleLeftBtn}
            ></Button>
          </span>
        </div>
      </div>

      {/* right */}
      <div className={[Style.n_transfer_content_wrapper].join(" ")}>
        <div className={[Style.n_transfer_content_header_wrapper].join(" ")}>
          <div className={[Style.n_transfer_content_header_control].join(" ")}>
            <Checkbox
              indeterminate={rightIndeter}
              defaultChecked={rightAllVal}
              onChange={(e: BaseSyntheticEvent) =>
                checkboxAllChange(e, "right")
              }
            ></Checkbox>
            <span>{`${targetArr.length}项`}</span>
          </div>
          <div className={[Style.n_transfer_content_header_title].join(" ")}>
            {titles[1]}
          </div>
        </div>
        <div className={[Style.n_transfer_content].join(" ")}>
          {targetArr.map((target) => {
            return (
              <div
                key={target.key}
                className={[Style.n_transfer_content_item].join(" ")}
              >
                <Checkbox
                  value={target.title}
                  onChange={(e: BaseSyntheticEvent) =>
                    handleCheckboxChange(e, target.key, "right")
                  }
                  defaultChecked={targetSelectKeys.includes(target.key)}
                >
                  {`${render ? render(target) : target.title}`}
                </Checkbox>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Transfer;
