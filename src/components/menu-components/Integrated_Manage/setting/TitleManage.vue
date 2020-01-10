<template>
<!-- 职称管理 -->
<div class="main-right mt-5">
  <!-- 顶部菜单 -->
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="show-tab" data-toggle="tab" href="#show-inner" role="tab" aria-controls="dmg" aria-selected="true">显示</a>
    </li>
    <li class="nav-item">
      <a class="nav-link " id="new-tab" data-toggle="tab" href="#new-inner" role="tab" aria-controls="dmg" aria-selected="true">新建</a>
    </li>
    <li class="nav-item">
      <a class="nav-link " id="verify-tab" data-toggle="tab" href="#verify-inner" role="tab" aria-controls="dmg" aria-selected="true">修改</a>
    </li>
    <li class="nav-item">
      <a class="nav-link " id="remove-tab" data-toggle="tab" href="#remove-inner" role="tab" aria-controls="dmg" aria-selected="true">删除</a>
    </li>
  </ul>
  <!-- 底部列表组 -->
    <div class="tab-content " id="myTabContent">
      <!-- 显示 -->
      <div class="tab-pane fade show active" id="show-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class=" ml-2">
          <table class="table table-hover" id="table">
            <thead>
              <tr>
                <th scope="col">序号</th>
                <th scope="col">职务编号</th>
                <th scope="col">职务名称</th>
                <th scope="col">现有人数</th>
              </tr>
            </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
          </table>
        </form>
      </div>
      <!-- 新建 -->
      <div class="tab-pane fade show" id="new-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
          <div class="form-group col-sm-12 d-flex">
            <label for="oldPwd" class="col-form-label col-sm-2">职称名称：</label>
            <div class="col-sm-9 ml-5">
              <input  class="form-control" id="oldPwd">
            </div>
          </div>
          <div class="form-group col-sm-12 d-flex">
            <label for="newPwd" class="col-form-label col-sm-2">部门排列位置为：</label>
            <div class="col-sm-9 ml-5">
              <input  class="form-control" id="oldPwd">
            </div>
          </div>
          <div class="form-group col-sm-12 d-flex ">
            <label for="insPwd" class="col-form-label col-sm-2">密码确认:</label>
            <div class="col-sm-9 ml-5">
              <input  class="form-control" id="oldPwd">
            </div>
          </div>
          <div class="col-sm-12 row">
           <div class="col-sm-2 mr-5"></div>
            <div class="col-sm-4 ml-5">
           <input class="form-check-input" type="checkbox" id="Check1">
           <label class="form-check-label" for="Check2">
              位于前面（不选位于其后）
           </label>
           </div>
          </div>
          <div class="d-flex col-sm-12 justify-content-center">
            <button type="submit" class="btn btn-primary">修改</button>
          </div>
        </form>
      </div>
      <!-- 修改 -->
      <div class="tab-pane fade show" id="verify-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
          <div class="form-group col-sm-12 d-flex">
            <label for="oldPwd" class="col-form-label col-sm-2">欲修改职称的名称：</label>
            <div class="col-sm-9 ml-5">
              <input  class="form-control" id="oldPwd">
            </div>
          </div>
          <div class="form-group col-sm-12 d-flex">
            <label for="newPwd" class="col-form-label col-sm-2">职称名称：</label>
            <div class="col-sm-9 ml-5">
              <input  class="form-control" id="oldPwd">
            </div>
          </div>
          <div class="form-group col-sm-12 d-flex ">
            <label for="insPwd" class="col-form-label col-sm-2">职称编号:</label>
            <div class="col-sm-9 ml-5">
              <input  class="form-control" id="oldPwd">
            </div>
          </div>
          <div class="form-group col-sm-12 d-flex ">
            <label for="insPwd" class="col-form-label col-sm-2">部门排列位置为:</label>
            <div class="col-sm-9 ml-5">
              <input  class="form-control" id="oldPwd">
            </div>
          </div>
          <div class="col-sm-12 row">
           <div class="col-sm-2 mr-5"></div>
            <div class="col-sm-4 ml-5">
           <input class="form-check-input" type="checkbox" id="Check1">
           <label class="form-check-label" for="Check2">
              位于前面（不选位于其后）
           </label>
           </div>
          </div>
          <div class="d-flex col-sm-12 justify-content-center">
            <button type="submit" class="btn btn-primary">修改</button>
          </div>
        </form>
      </div>
      <!-- 删除 -->
     <div class="tab-pane fade show " id="remove-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
          <h1>选项四</h1>
        </form>
      </div>
    </div>
</div>
</template>

<script>
</script>

<style>
</style>
