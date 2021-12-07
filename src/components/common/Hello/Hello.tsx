import styled from '@emotion/styled';

const Button = styled.button`
  background-color: skyblue;
  padding: 10px;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  margin-right: ;
`;

export interface HelloProps {
  /** 보여주고 싶은 이름 */
  name: string;
  /** 이 값을 `true` 로 설정하면 h1 태그로 렌더링합니다. */
  big?: boolean;
  /** Hello 버튼 누를 때 호출 할 함수 */
  onHello?: () => void;
  /** Bye 버튼 누를 때 호출 할 함수 */
  onBye?: () => void;
}

const Hello = ({ name, big = false, onHello, onBye }: HelloProps) => {
  return (
    <div>
      {big ? <h1>
안녕하세요,{name}
!
</h1> : <p>
안녕하세요,{name}
!
</p>}
      <div>
        <Button onClick={onHello}>Hello</Button>
        <Button onClick={onBye}>Bye</Button>
      </div>
    </div>
  );
};

export default Hello;
