let lat, lng

// 요청 수락시
function success(position){
    lat = position.coords.latitude; // x 축 좌표
    lng = position.coords.longitude;// y 축 좌표

    getAddr(coords)


    // DATA 확인용
    console.log("latitude(경도) : " + lat);
    console.log(" longitude(위도) : " + lng);

    // JSON 타입으로 변경
    let coordObj ={
        lat,lng
    };

    
    // string 형태로 json을 localStorage에 저장
    // localStorage.setItem('coods', JSON.stringify(coordObj)); 

};

// 에러 처리
function error(err){
    console.log("ERROR : " + err.code + " / " + err.message);
}



function getAddr(coords){

    const API_id = "X-NCP-APIGW-API-KEY-ID: hshxrb7y3r";
    const API_key = "X-NCP-APIGW-API-KEY: NDrSmaBAZlLdDNbn04WQUumXMOGkmttfBncLRaFF";

    const URI = `https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?coords=${lng},${lat}&orders=admcode&output=json`;
    fetch(URI, {
        method: 'GET',
        // mode : "cors",
        headers:{

            "X-NCP-APIGW-API-KEY-ID" : "hshxrb7y3r",
            "X-NCP-APIGW-API-KEY" : "cFav5snzfNqDKs0ssoAZ3CtvhW0IOVvqBHYaX7aA",
            'Access-Control-Allow-Origin' : "no-cors"
        }
    }).then(function(response){
            // alert("동작")
     
            return response.json();
    }).then(function(json){
        console.log("데이터",json)
    }).catch(function(error){
        //   alert("error")
    //  {
    //   error = {
    //   "errorCode" : "300",
    //   "message" : "Not Found Exception"
    //   }
    //   }
        console.log(error);
    })
};

navigator.geolocation.getCurrentPosition(success, error);

let coords = (localStorage.getItem('coods')) ;





