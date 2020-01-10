<template>
<!-- 工作面管理 -->
<div class="main-right mt-5">
  <!-- 顶部菜单 -->
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="relate-tab" data-toggle="tab" href="#relate-inner" role="tab" aria-controls="dmg" aria-selected="true">关联设置</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="new-tab" data-toggle="tab" href="#new-inner" role="tab" aria-controls="dmg" aria-selected="true">新建工作面</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="remove-tab" data-toggle="tab" href="#remove-inner" role="tab" aria-controls="dmg" aria-selected="true">删除工作面</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="verify-tab" data-toggle="tab" href="#verify-inner" role="tab" aria-controls="dmg" aria-selected="true">修改人数</a>
    </li>
  </ul>
  <!-- 底部列表组  -->
    <div class="tab-content " id="myTabContent">
      <!-- 关联设置 -->
      <div class="tab-pane fade show active" id="relate-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
          <div class="form-group col-sm-12 row">
            <label for="oldPwd" class="col-form-label col-sm-2">请选择工作面名称：</label>
              <div class="col-sm-9 ml-5">
               <select class="custom-select">
                 <option selected>----请选择----</option>
                 <option value="1">One</option>
               </select>
              </div>
          </div>
          <div class="d-flex col-sm-12 justify-content-center">
            <a href="#New-tab-inner" class="btn btn-primary">查询</a>
          </div>
        </form>
      </div>
      <!-- 新建工作面-->
      <div class="tab-pane fade show" id="new-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
          <h5>在此新建工作面，请在下面输入你想要建立的工作面的名称</h5>
          <div class="form-group col-sm-12 row">
            <label for="oldPwd" class="col-form-label col-sm-2">工作面名称：</label>
              <div class="col-sm-9 ml-5">
                <input  class="form-control"  placeholder="必填">
              </div>
          </div>
          <div class="form-group col-sm-12 row">
            <label for="oldPwd" class="col-form-label col-sm-2">上线人数：</label>
              <div class="col-sm-9 ml-5">
                <input  class="form-control"  placeholder="必填">
              </div>
          </div>
          <div class="d-flex col-sm-12 justify-content-center">
            <a href="#New-tab-inner" class="btn btn-primary">确定</a>
          </div>
        </form>
      </div>
      <!-- 删除工作面-->
      <div class="tab-pane fade show" id="remove-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
          <h5>在此进行工作面的删除操作，在下面选择你要删除的工作面名称</h5>
          <div class="form-group col-sm-12 row">
            <label for="oldPwd" class="col-form-label col-sm-2">工作面名称：</label>
              <div class="col-sm-9 ml-5">
               <select class="custom-select">
                 <option selected>----请选择----</option>
                 <option value="1">One</option>
               </select>
              </div>
          </div>
          <div class="d-flex col-sm-12 justify-content-center">
            <a href="#New-tab-inner" class="btn btn-primary">确定</a>
          </div>
        </form>
      </div>
      <!-- 修改人数 -->
      <div class="tab-pane fade show" id="verify-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
          <div class="form-group col-sm-12 row">
            <label for="oldPwd" class="col-form-label col-sm-2">请选择工作面名称：</label>
              <div class="col-sm-9 ml-5">
               <select class="custom-select">
                 <option selected>----请选择----</option>
                 <option value="1">One</option>
               </select>
              </div>
          </div>
          <div class="d-flex col-sm-12 justify-content-center">
            <a href="#New-tab-inner" class="btn btn-primary">查询</a>
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
