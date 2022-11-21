# memo

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
