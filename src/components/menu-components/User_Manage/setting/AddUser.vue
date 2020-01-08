<template>
<div class="main-right mt-5">
     <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
       <li class="nav-item">
         <a class="nav-link active" id="ChangePsw-tab" data-toggle="tab" href="#ChangePsw-inner" role="tab" aria-controls="home" aria-selected="true">新建用户</a>
       </li>
     </ul>
     <div class="tab-content" id="myTabContent">
       <div class="tab-pane fade show active" id="ChangePsw-inner" role="tabpanel" aria-labelledby="home-tab">
         <form class="mt-4  row">
           <div class="form-group col-sm-12 row">
             <label for="oldPwd" class="col-form-label col-sm-12">用户名：</label>
             <div class="col-sm-12">
               <input  class="form-control" id="oldPwd">
             </div>
           </div>
           <div class="form-group col-sm-12 row">
             <label for="newPwd" class="col-form-label col-sm-12">密码：</label>
             <div class="col-sm-12">
               <input  class="form-control" id="oldPwd">
             </div>
           </div>
           <div class="form-group col-sm-12 row">
             <label for="insPwd" class="col-form-label col-sm-12">确认密码:</label>
             <div class="col-sm-12">
               <input  class="form-control" id="oldPwd">
             </div>
           </div>
           <div class="form-group col-sm-12 row">
             <label for="insPwd" class="col-form-label col-sm-12">用户等级:</label>
             <div class="col-sm-12">
               <select class="custom-select">
                 <option selected>----位于最后----</option>
                 <option value="1">One</option>
               </select>
             </div>
           </div>
           <div class="col-sm-12 mt-2  ml-4">
           <input class="form-check-input" type="checkbox" id="Check1">
           <label class="form-check-label" for="Check2">
              允许该用户创建比其级别低的新用户
           </label>
           </div>
           <div class="col-sm-12 mt-2  ml-4">
           <input class="form-check-input " disabled="disabled" type="checkbox" id="Check1">
           <label class="form-check-label" for="Check2">
              允许该用户修改数据
           </label>
           </div>
           <div class="d-flex col-sm-12 justify-content-center">
             <button type="submit" class="btn btn-primary">提交</button>
           </div>
         </form>
       </div>
     </div>
  </div>
</template>

<script>
</script>

<style>
</style>
