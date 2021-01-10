import qs from 'qs';

const About = ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true // 이 설정으로 문자열 맨 앞의 ?를 생략
    });
    const showDetail = query.detail === 'true'; // 쿼리의 파싱 겨로가 값은 문자열
    return (
        <div>
            <h1>Introduce</h1>
            <p>Example Project for React Router</p>
            {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
        </div>
    );
};

export default About;