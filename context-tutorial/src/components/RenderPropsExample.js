const RenderPropsSample = ({ children }) => {
    return <div>결과: {children(5)}</div>
};
export default RenderPropsSample;


// <RenderPropsSample>{value => 2 * value}</RenderPropsSample>
// 이와같이 사용. 결과: 10을 리턴!