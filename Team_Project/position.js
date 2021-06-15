// 요청 수락시
function success(position){
    let lat = position.coords.latitude; // x 축 좌표
    let lng = position.coords.longitude;// y 축 좌표


    // DATA 확인용
    console.log("latitude(경도) : " + lat);
    console.log(" longitude(위도) : " + lng);

    // JSON 타입으로 변경
    let coordObj ={
        lat,lng
    };

    
    // string 형태로 json을 localStorage에 저장
    localStorage.setItem('coods', JSON.stringify(coordObj)); 

};

// 에러 처리
function error(err){
    console.log("ERROR : " + err.code + " / " + err.message);
}

navigator.geolocation.getCurrentPosition(success, error);

let coords = (localStorage.getItem('coods')) ;

alert(coords)

const URI = "https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?coords=${coords}&orders=admcode&output=json";
const API_id = "X-NCP-APIGW-API-KEY-ID: hshxrb7y3r";
const API_key = "X-NCP-APIGW-API-KEY: NDrSmaBAZlLdDNbn04WQUumXMOGkmttfBncLRaFF";

function getAddr(coords){
    fetch(URI, API_id,API_key).then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json)
    })
};
