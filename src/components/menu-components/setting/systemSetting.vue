<template>
  <div class="main-right mt-5">
     <ul class="nav nav-tabs" id="myTab" role="tablist">
       <li class="nav-item">
         <a class="nav-link active" id="setting-tab" data-toggle="tab" href="#setting-tab-inner" role="tab" aria-controls="home" aria-selected="true">基本设置</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" id="power-tab" data-toggle="tab" href="#power-tab-inner" role="tab" aria-controls="power" aria-selected="false">权限设置</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" id="show-tab" data-toggle="tab" href="#show-tab-inner" role="tab" aria-controls="show" aria-selected="false">显示设置</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" id="system-tab" data-toggle="tab" href="#system-tab-inner" role="tab" aria-controls="system" aria-selected="false">系统设置</a>
       </li>
     </ul>
     <div class="tab-content" id="myTabContent">
       <!-- 表单-基本设置  -->
       <div class="tab-pane fade show active" id="setting-tab-inner" role="tabpanel" aria-labelledby="home-tab">
         <form>
           <div class="form-group">
             <div class="col-sm-10" id="form">
               <div class="form-check">
                 <input class="form-check-input" type="checkbox" id="gridCheck1">
                 <label class="form-check-label" for="gridCheck1">
                    启用系统Guest用户登陆
                 </label>
               </div>
               <div class="form-check">
                 <input class="form-check-input" type="checkbox" id="gridCheck2">
                 <label class="form-check-label" for="gridCheck2">
                   统计井下人数时不包括井上分站
                 </label>
               </div>
               <div class="form-check">
                 <input class="form-check-input" type="checkbox" id="gridCheck3">
                 <label class="form-check-label" for="gridCheck3">
                   如果出井时间为空则用最后出现在井下的时间代替
                 </label>
               </div>
               <div class="form-check">
                 <input class="form-check-input" type="checkbox" id="gridCheck4">
                <label class="form-check-label" for="gridCheck4">
                  计算工作津贴灯时用员工当前的设置进行计算
                </label>
               </div>
               <div class="form-check d-flex ">
                 <input class="form-check-input" type="checkbox" id="gridCheck4">
                <label class="form-check-label" id="form-check" for="gridCheck4">
                  设定必须显示的分站状态
                </label>
                  <button type="submit" class="btn btn-primary ">必须显示状态选定</button>
               </div>
             </div>
           </div>
           <div class="form-group d-flex align-items-center ">
             <label for="inputEmail1" class="<col-sm-2></col-sm-1> col-form-label">奋战状态动态显示人员流动显示，显示</label>
             <div class="col-sm-5">
               <input type="email" class="form-control" id="inputEmail1">
             </div>
              <span>分钟内的人员流动</span>
           </div>
           <div class="form-group d-flex align-items-center ">
             <label for="inputEmail2" class="<col-sm-2></col-sm-1> col-form-label">井下停留超过</label>
             <div class="col-sm-5">
               <input type="email" class="form-control" id="inputEmail2">
             </div>
              <span>分钟时提示超时(以动态图形提示)</span>
           </div>
           <div class="form-group d-flex align-items-center ">
             <label for="inputEmail3" class="<col-sm-2></col-sm-1> col-form-label">网页主标题显示(20字以内)</label>
             <div class="col-sm-10">
               <input type="email" class="form-control" id="inputEmail3">
             </div>
           </div>
           <div class="form-group d-flex align-items-center ">
             <label for="inputEmail4" class="<col-sm-2></col-sm-1> col-form-label">网页次标题显示(16字以内)</label>
             <div class="col-sm-10">
               <input type="email" class="form-control" id="inputEmail4">
             </div>
           </div>
           <div class="form-group row">
             <div class="col-sm-1 offset-5">
               <button type="submit" class="btn btn-primary">修改</button>
             </div>
           </div>
         </form>
       </div>
       <!-- 表单-权限设置 -->
       <div class="tab-pane fade" id="power-tab-inner" role="tabpanel" aria-labelledby="power-tab">
         <div>权限设置</div>
       </div>
       <!-- 表单-显示设置 -->
       <div class="tab-pane fade" id="show-tab-inner" role="tabpanel" aria-labelledby="contact-tab">
         <form>
          <div class="form-group">
            <div class="col-sm-10" id="form">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck5">
                <label class="form-check-label" for="gridCheck5">
                 在界面上显示当前登陆用户
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck6">
              <label class="form-check-label" for="gridCheck6">
                 在通风图上显示井下人数和当天下井人数
              </label>
            </div>
            <div class="form-check disabled ml-5">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option1" disabled>
              <label class="form-check-label" for="exampleRadios3">
                显示井总人数（井下总人数：xxxx人）
              </label>
            </div>
            <div class="form-check disabled ml-5">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option2" disabled>
              <label class="form-check-label" for="exampleRadios3">
                显示当天下井总人数（当天下井总人数：xxxx人）
              </label>
            </div>
            <div class="form-check disabled ml-5">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
              <label class="form-check-label" for="exampleRadios3">
                显示井下人数和当天下井人数（下井总人数：xxxx/xxxx人）
              </label>
            </div>
            <div class="form-check d-flex">
              <input class="form-check-input" type="checkbox" id="gridCheck7">
              <label class="form-check-label" for="gridCheck7">
                 通风图动态显示状态选择
              </label>
              <button class="btn btn-primary">状态设定</button>
            </div>
            <div class="form-check d-flex mb-4">
              <input class="form-check-input" type="checkbox" id="gridCheck8">
              <label class="form-check-label" for="gridCheck8">
                 启用通风图循环显示 循环显示间隔时间：（秒）
              </label>
              <div class="col-sm-5">
                <input type="email" class="form-control" id="inputEmail3" placeholder="3">
              </div>
            </div>
            <div class="form-group d-flex align-items-center ">
              <label for="inputEmail5" class="<col-sm-2></col-sm-1> col-form-label">下井总人数上限：</label>
              <div class="col-sm-3 ml-5">
                <input type="email" class="form-control" id="inputEmail5" placeholder="1000">
              </div>
              <label for="inputEmail6" class="<col-sm-2></col-sm-1> col-form-label">每班下井总人数上限：</label>
              <div class="col-sm-3 ml-5">
                <input type="email" class="form-control" id="inputEmail6" placeholder="1000">
              </div>
            </div>
            <div class="form-check row d-flex align-items-center ">
              <label for="inputEmail7" class="<col-sm-2></col-sm-1> col-form-label">报警</label>
              <div class="check-warn">
              <input class="form-check-input" type="checkbox" id="gridCheck8">
              <label class="form-check-label" for="gridCheck8">
                 中心站停止运行
              </label>
              </div>
              <div class="check-warn">
              <input class="form-check-input" type="checkbox" id="gridCheck9">
              <label class="form-check-label" for="gridCheck9">
                 设备异常
              </label>
              </div>
            </div>
          </div>
        </div>
      </form>
     </div>
       <!-- 表单-系统设置 -->
       <div class="tab-pane fade" id="system-tab-inner" role="tabpanel" aria-labelledby="contact-tab">
         <form class="mt-4">
           <div class="form-group d-flex align-items-center">
             <label for="inputEmail8" class="<col-sm-2></col-sm-1> col-form-label">井口停留时间：（分）</label>
             <div class="col-sm-4 ml-3">
               <input type="email" class="form-control" id="inputEmail8">
             </div>
             <label for="inputEmail9" class="<col-sm-2></col-sm-1> col-form-label">异常超时处理时间：（分）</label>
             <div class="col-sm-4 ml-2">
               <input type="email" class="form-control" id="inputEmail9">
             </div>
           </div>
           <div class="form-group d-flex align-items-center">
             <label for="inputEmail10" class="<col-sm-2></col-sm-1> col-form-label">井口时间间隔：（分）</label>
             <div class="col-sm-4 ml-3">
               <input type="email" class="form-control" id="inputEmail10">
             </div>
             <label for="inputEmail11" class="<col-sm-2></col-sm-1> col-form-label mr-5">重叫次数：（次）</label>
             <div class="col-sm-4 ml-4">
               <input type="email" class="form-control" id="inputEmail11">
             </div>
           </div>
           <div class="form-group d-flex align-items-center mt-3 mb-3">
             <label for="inputEmail12" class="<col-sm-2></col-sm-1> col-form-label mr-5">LED显示方式：</label>
             <select class="custom-select custom-select-sm-8 col-sm-8 ml-5">
              <option selected>不显示</option>
              <option value="1">显示</option>
              <option value="2">待定</option>
              <option value="3">待定</option>
            </select>
           </div>
           <div class="d-flex justify-content-center">
              <label for="inputEmail13" class="<col-sm-2></col-sm-1> col-form-label port-tittle">接口IP地址设置（接口编号与分站接口编号相对应）</label>
           </div>
           <div class="form-group d-flex align-items-center mt-3">
             <label for="inputEmail14" class="<col-sm-2></col-sm-1> col-form-label mr-5">接口编号1：</label>
             <div class="col-sm-4 ml-5">
               <input type="email" class="form-control" id="inputEmail14">
             </div>
             <label for="inputEmail15" class="<col-sm-2></col-sm-1> col-form-label mr-5">接口编号2：</label>
             <div class="col-sm-4 ml-5">
               <input type="email" class="form-control" id="inputEmail15">
             </div>
           </div>
           <div class="form-group d-flex align-items-center mt-3">
             <label for="inputEmail16" class="<col-sm-2></col-sm-1> col-form-label mr-5">接口编号3：</label>
             <div class="col-sm-4 ml-5">
               <input type="email" class="form-control" id="inputEmail16">
             </div>
             <label for="inputEmail17" class="<col-sm-2></col-sm-1> col-form-label mr-5">接口编号4：</label>
             <div class="col-sm-4 ml-5">
               <input type="email" class="form-control" id="inputEmail17">
             </div>
           </div>
           <div class="col-sm-1 offset-5">
             <button type="submit" class="btn btn-primary">修改</button>
           </div>
         </form>
       </div>
   </div>
  </div>
</template>

<script>
</script>

<style>
  .main-right{
    width: 1500px;
  }
  .form-check{
    margin: 20px 0;
  }
  .form-group{
    margin-bottom: 30px !important;
  }
  form{
    color: white;
  }
  #form{
    padding: 0;
  }
  #form-check{
    margin-right: 300px;
  }
  .check-warn{
    margin-left: 70px;
  }
  .port-tittle{
    font-size: 20px !important;
  }
</style>
