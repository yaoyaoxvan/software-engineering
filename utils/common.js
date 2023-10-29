//模拟新闻数据
const news = [
  {
    id: '1',
    title: '牛肉面',
    poster: 'https://img0.baidu.com/it/u=748736807,2384460744&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
    content: ' 兰州清汤牛肉面有"一清、二白、三红、四绿、五黄"五大特点。即牛肉汤色清气香；萝卜片洁白纯净；辣椒油鲜红漂浮；香菜、蒜苗新鲜翠绿；面条则柔滑透黄。兰州人似乎对醋特别偏爱，端来一碗面，先操起大腹醋壶。调入一股香醋，仿佛只有这样才能吃出牛肉面的酸辣清香。吃牛肉面往往要超出平常的食量，一碗面直吃得发梢冒汗，还要将酸辣的清汤喝个精光。',
    add_date: '2023-09-04'
  },
  {id: '2',
  title: '浆水面',
  poster: 'https://img0.baidu.com/it/u=222031493,2790093248&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1694538000&t=26c209a611f8c0023918b9e2c2846cbc',
  content: ' 浆水面是以浆水做汤汁的一种面条，广泛流传于甘肃、宁夏、山西、陕西一带。相传该名是由汉高祖刘邦与丞相萧何在汉中所起，其味酸、辣、清香，别具一格，浆水菜的菜可选用芹菜、白菜、荠菜等叶类蔬菜。。',
  add_date: '2023-09-04'},
  {id: '3',
  title: '炒面片',
  poster: 'https://img1.baidu.com/it/u=1518031882,4159118069&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1694538000&t=5d410b97c0213d26215d822a596efb67',
  content: '炒面片是一道菜品，属于家常美食。主要原料有面条，主要配料有肉丁或肉片、辣子、笋片等，通过高温翻炒的方法制作而成。',
  add_date: '2023-09-4'},
  {id: '4',
  title: '灰豆子',
  poster: 'https://img0.baidu.com/it/u=830355526,1315249574&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1694538000&t=7bfed5ace3d5e61073bce9a76ebea104',
  content: '西北地区兰州独有的一种甜食小吃。用当地的蓬灰与豌豆，红枣，白糖一起熬煮成的粥，冬夏，早晚皆可使用，老少皆宜。',
  add_date: '2023-09-4'},
  {id: '5',
  title: '甜醅子',
  poster: 'https://img0.baidu.com/it/u=3847444673,1749903052&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  content: '“甜醅”是青海东北部地区的特色小吃之一，该菜品主要用青稞制作。在高原古城西宁及其周边地区，随处都可以看到这种独特的民间小吃“甜醅”。在甘肃宁夏等地区也存在少量由燕麦制成的甜醅。',
  add_date: '2023-09-4'},
  {id: '6',
  title: '热冬果',
  poster: 'https://img2.baidu.com/it/u=3261052543,910321336&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1694538000&t=c4a0c08ff009bf2b9d879a3f281114a3',
  content: '“热冬果是甘肃省有名的传统小吃。相传由唐朝的宰相魏征所创造。上百年来兰州人喜食街头小吃。兰州地气干燥，热冬果乃冬季下火之佳品。每年初冬，兰州街头卖热冬果的小摊便随处可见。煤火炉上放一特大砂锅，煮着黄橙橙的大梨，热气腾腾地散发着淡淡的药味和清香。遇到下雪天，吃碗热冬果，浑身的温暖舒畅如漫天的雪花般飘散开来。。',
  add_date: '2023-09-4'},
  {id: '7',
  title: '牛奶鸡蛋醪糟',
  poster: 'https://img2.baidu.com/it/u=1214558548,532015878&fm=253&fmt=auto&app=120&f=JPEG?w=1041&h=800',
  content: '牛奶鸡蛋醪糟是一道菜品，制作原料主要有牛奶、鸡蛋、醪糟等。吃起来蛋花柔软, 滑嫩爽口，香甜略酸，真是色香味俱全。是金城兰州比较流行的美食，最先食用牛奶鸡蛋醪糟的是甘肃临夏人，后传入兰州。',
  add_date: '2023-09-4'},
  {id: '8',
  title: '三炮台',
  poster: 'https://img0.baidu.com/it/u=1208679760,866762733&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  content: '三炮台，是用甘肃临泽小枣、福建桂圆、新疆葡萄干、荔枝干、优质冰糖为佐料配制而成。因地方口味，也有加入杏干、菊花、干玫瑰。香而不清则为一般，香而不甜为苦茶，甜而不活不算上等，只有鲜、爽、活才为茗中佳品',
  add_date: '2023-09-4'},
  {id: '9',
  title: '杏皮水',
  poster: 'https://img0.baidu.com/it/u=1431763388,816669092&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1694538000&t=e3b38dc23269295e2e7188f7831ee323',
  content: '杏皮水，即杏皮茶，是甘肃敦煌当地招牌饮料，用当地的李广杏为原料，以杏皮熬制而成，冰镇后口感酸甜解渴，和酸梅汤味道有异曲同工之妙。',
  add_date: '2023-09-4'},
  {id: '10',
  title: '羊肉泡馍',
  poster: 'https://img1.baidu.com/it/u=254007757,4008390224&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1694538000&t=5e0a0d9ece4bf58fe5b52a04da8daec3',
  content: '羊肉泡馍，亦称羊肉泡，古称“羊羹”，关中汉族风味饭食，源自西周。它烹制精细，料重味醇，肉烂汤浓，肥而不腻，营养丰富，香气四溢，诱人食欲，食后回味无穷。 北宋著名诗人苏轼留有“陇馔有熊腊，秦烹唯羊羹”的诗句。因它暖胃耐饥，素为陕西人民所喜爱，外宾来陕也争先品尝，以饱口福。羊肉泡馍已成为陕西名吃的“总代表”',
  add_date: '2023-09-4'},
  {id: '11',
  title: '黄焖羊肉',
  poster: 'https://img1.baidu.com/it/u=3213271347,62251283&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1694538000&t=8492bffb3733bd2a8aa5aa1127b5f29b',
  content: '黄焖羊肉，是西北经典的名菜之一。此菜口味香酥， 肥而不腻。其是清朝末代皇帝的御膳菜肴。羊肉富有营养，具有暖中补气、滋养、御风寒、生肌健力等功效明火冒烟等事故苗头。广东开展重大隐患专项整治行动，防控矿山、危化品、工贸等重点行业领域风险，筑牢“防”的屏障。',
  add_date: '2023-09-4'},
  {id: '12',
  title: '羊杂碎',
  poster: 'https://img0.baidu.com/it/u=1284550516,801090152&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1694538000&t=fb50d0a77630755ce2c3ca7ce1ebaee3',
  content: '羊杂碎，由羊的头、蹄、血、肝、心、肠、肚等混合烩制而成，故又名“羊杂烩”',
  add_date: '2023-09-4'}
 ];
//  获取新闻列表函数
 //获取新闻列表
 function getNewsList() {
  let list = [];
  for (var i = 0; i < news.length; i++) {
  let obj = {};
  obj.id = news[i].id;
  obj.poster = news[i].poster;
  obj.add_date = news[i].add_date;
  obj.title = news[i].title;
  list.push(obj);
  }
  return list; //返回新闻列表
 }
//  获取新闻内容函数
 //获取新闻内容
 function getNewsDetail(newsID) {
  let msg = {
  code: '404', //没有对应的新闻
  news: {}
  };
  for (var i = 0; i < news.length; i++) {
  if (newsID == news[i].id) { //匹配新闻id编号
  msg.code = '200'; //成功
  msg.news = news[i]; //更新当前新闻内容
  break;
  }
  }
  return msg; //返回查找结果
 }
//  对外暴露接口
 // 对外暴露接口
 module.exports = {
  getNewsList: getNewsList,
  getNewsDetail: getNewsDetail
 }
 