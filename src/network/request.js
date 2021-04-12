import axios from 'axios'
//SpringThunder
export function request(config,success,failure){
  //创建一个实例
  const instance1 =axios.create({
    baseURL:'http://localhost:3000',
    timeout:'5000'
  })
  // 拦截器 instance1
  instance1.interceptors.request.use(config=>{
    //请求成功
    //console.log(config);
    return config
  },err=>{
     //请求失败
     console.log(err);
  })
  //instance1.interceptors.response()
  instance1(config).then(res=>{
    console.log('--------success--------');
    success(res)
  }).catch(res=>{
    console.log('--------failure--------');
    failure(res)
  })
}
