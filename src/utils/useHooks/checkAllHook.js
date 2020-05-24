import { useState } from 'react';

/**
 * @param allKeys 所有的选项的key(key必须是字符串类型)
 * @param props
 * @returns {{selectKeys: any}}
 */
export default function useCheckAll(props) {
  let keys = props.allKeys || [];
  const [selectKeys, setSelectKeys] = useState(props.selectKeys || []);
  const [indeterminate, setIndeterminate] = useState(props.indeterminate || false);

  //全选的某个项的修改事件
  const onItemChange = e => {
    let selectedKeys = [...selectKeys];
    if (Array.isArray(e)) {
      selectedKeys = [...e];
    } else {
      let { checked, value } = e.target;
      if (checked) {
        selectedKeys.push(value);
        selectedKeys = keys.filter(item => {
          return selectedKeys.includes(item);
        });
      } else {
        selectedKeys = selectedKeys.filter(item => {
          return item !== value;
        });
      }
    }
    setSelectKeys(selectedKeys);
    setIndeterminate(!!selectedKeys.length && selectedKeys.length !== keys.length);
  };

  const onAllChange = e => {
    let { checked } = e.target;
    if (checked) {
      setSelectKeys(keys);
    } else {
      setSelectKeys([]);
    }
    setIndeterminate(false);
  };

  const reset = () => {
    setSelectKeys([]);
    setIndeterminate(false);
  };

  return {
    //选中的key
    selectKeys,
    //单个item的onChange
    onItemChange,
    //全选的的onChange
    onAllChange,
    //时候是半选状态
    indeterminate,
    //全选的是否选中
    allChecked: !!keys.length && selectKeys.length === keys.length,
    reset
  };
}
