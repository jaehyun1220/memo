let bjList = aBroadList.broad
let bjFilter = bjList.filter(el => el.broad_cate_no == '00040117')

let cateBjList = ''
let cateBjId = []

cateBjList = bjFilter

cateBjList.forEach(el => {
  cateBjId.push(el.user_id);
});

for (let i = 0; i < cateBjId.length; i++) {
  let url = `https://bjapi.afreecatv.com/api/${cateBjId[i]}/station`
  async function bjInfo() {
    try {
      let broadUrl = await fetch(url)
      let bjData = await broadUrl.json();
      console.log(bjData);
    } catch(error) {
      console.log('error');
    }
  }
  bjInfo();
}


//slice : 시작인덱스부터 끝인덱스 전에꺼 까지
let qwe = '가나다라마바사'
let qwer = qwe.slice(2,6)
// console.log(qwer);
// console.log(qwe);

//splice : 시작인덱스부터 수정되는 갯수
let asd = [0, 1, 2, 3, 4, 5]
let asdf = asd.splice(2, 2, 7, 8)
// console.log(asdf); //빼돌린 애들
// console.log(asd); //기본배열갱신