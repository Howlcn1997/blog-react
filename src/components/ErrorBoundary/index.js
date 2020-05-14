import React from 'react';

/**
 * Error Boundaries
 * Prevent errors from causing page crashes
 *
 * 错误边界
 * 防止由于Javascript错误导致的页面崩溃
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    console.log(error);
    // 更新 state 使下一次渲染能够显示降级后的 UI
    // Update the state so that the next rendering can show the downgraded UI
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // this.setState({ hasError: true });
    console.error('Catch Error :', error, info);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}
