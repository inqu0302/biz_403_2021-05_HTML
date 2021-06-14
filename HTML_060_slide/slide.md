# image

## image 슬라이드 구현을 위한 box layout 구성

- 1개의 이미지를 보여줄 layout을 구성 (div.main)
- 보여줄 이미지 전체를 img tag 를 사용하여 나열
- 나열된 이미지들을 div tag(div.images)로 묶고 div tag를 flex로 변환
  이미지들이 한줄로 나열된다
- 나열된 이미지들은 박스크기와 상관없이 이미지 크기대로 모양을 유지한다
- div.images 를 감싸는 또하나의 div box를 만든다(div.mask)
  그리고 이 box는 overflow를 hidden으로 설정하면 다른이미지들은 감춰지고 divbox만큼만 보여진다

## image 슬라이드를 구현하기 위한 애니메이션

- 한개의 이미지 크기만큼 오른쪽으로 계속해서 이동하기

- @keyframs 속성을 사용하여 애니메이션 설정을 한다
- 시작위치(0%)의 설정과 마지막위치(100%)의 설정을 각각 설정 한다.
