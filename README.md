# essenceEditor Ver0.1

노드JS로 제작한 에센스 제작툴입니다.

app.js가 서버 실행파일입니다.접속은 http://localhost:5000/ 으로 접속하면 됩니다.
kosta 내부에서 작업할 때는 조원중 서버를 실행 시킨사람의 아이피로(예-192.168.0.xxx:5000) 접속하면 화면 공유를 통해 작업을 할 수 있습니다. (만약 접속이 안되면 방화벽, 포트 개방을 확인해보세요)

DB와 연동하지 않았기 때문에 작업내역을 저장하기 위해서는 상단 'GET JSON'을 누르고, 옆에 있는 텍스트필드에 작업내역이 JSON으로 변환되어 나옵니다. 이 JSON 텍스트를 컴퓨터에 새롭게 만든 텍스트파일에 저장하면 됩니다.

작업 내역을 불러올 때는 INSERT JSON을 누르면 나오는 프롬프트에 따로 저장해놓은 JSON 텍스트를 붙여 넣으면 됩니다.
