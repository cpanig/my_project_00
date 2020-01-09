<template>
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="manage-tab" data-toggle="tab" href="#manage-inner" role="tab" aria-controls="dmg" aria-selected="true">职务管理</a>
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
    <div class="tab-content " id="myTabContent">
      <!-- 职务管理 -->
      <div class="tab-pane fade show active" id="manage-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class=" ml-2 ">
          <table class="table table-hover col-sm-12" id="table">
            <thead>
              <tr>
                <th scope="col">序号</th>
                <th scope="col">职务编号</th>
                <th scope="col">职务名称</th>
                <th scope="col">职务级别</th>
                <th scope="col">默认工时</th>
                <th scope="col">取得人数</th>
                <th scope="col">跟班</th>
              </tr>
            </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
          </table>
        </form>
      </div>
      <!-- 新建 -->
      <div class="tab-pane fade show " id="new-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
          <div class="form-group col-sm-12 row ">
            <label for="oldPwd" class="col-form-label col-sm-2">职务名称：</label>
            <div class="col-sm-9 ml-5">
              <input  class="form-control" id="oldPwd" placeholder="必填">
            </div>
          </div>
          <div class="form-group col-sm-12 row">
            <label for="oldPwd" class="col-form-label col-sm-2">职务编号：</label>
            <div class="col-sm-9 ml-5">
              <input  class="form-control" id="oldPwd">
            </div>
          </div>
          <div class="form-group col-sm-12 row">
            <label for="oldPwd" class="col-form-label col-sm-2">默认工时：</label>
            <div class="col-sm-9 ml-5">
              <input  class="form-control" id="oldPwd">
            </div>
          </div>
          <div class="form-group col-sm-12 row">
            <label for="oldPwd" class="col-form-label col-sm-2">工时计算方式：</label>
            <div class="col-sm-5 ml-5">
             <select class="custom-select">
               <option selected>----请选择----</option>
               <option value="1">One</option>
             </select>
            </div>
            <div class="col-sm-4">
              <input  class="form-control" id="oldPwd">
            </div>
            <div class="row col-sm-12">
              <div class="col-sm-2 ml-5"></div>
              <div class="col-sm-5 mt-2 ml-4 border border-white border-1 p-0 mb-4">
                <span>计算说明：以实际工作时间除以工时进行计算，例如：某工时为4小时/工的员工工作11小时后，计工数理为11/2=2工</span>
              </div>
            </div>
          </div>
            <div class="form-group col-sm-12 row">
              <label for="oldPwd" class="col-form-label col-sm-2">职务级别：</label>
              <div class="col-sm-9 ml-5">
                <select class="custom-select">
                  <option selected>---请选择---</option>
                  <option value="1">One</option>
                </select>
              </div>
            </div>
            <div class="form-group col-sm-12 row">
              <label for="oldPwd" class="col-form-label col-sm-2">部门排列位置为：</label>
              <div class="col-sm-9 ml-5">
                <select class="custom-select">
                  <option selected>---位于最后---</option>
                  <option value="1">One</option>
                </select>
              </div>
            </div>
            <div class="col-sm-12 row">
             <div class="col-sm-2 mr-5"></div>
              <div class="col-sm-4 ml-4">
             <input class="form-check-input" type="checkbox" id="Check1">
             <label class="form-check-label" for="Check2">
                位于前面（不选位于其后）
             </label>
             </div>
            </div>
            <div class="d-flex col-sm-12 justify-content-center mt-5">
              <a href="#New-tab-inner" class="btn btn-primary">新建</a>
            </div>
        </form>
      </div>
      <!-- 修改-->
      <div class="tab-pane fade show" id="verify-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
          <div class="form-group col-sm-12 row">
            <label for="oldPwd" class="col-form-label col-sm-2">请选择想要修改的部门：</label>
            <div class="col-sm-9 ml-5">
              <select class="custom-select">
                <option selected>---位于最后---</option>
                <option value="1">One</option>
              </select>
            </div>
          </div>
          <div class="form-group col-sm-12 row ">
            <label for="oldPwd" class="col-form-label col-sm-2">职务名称：</label>
            <div class="col-sm-9 ml-5">
              <input  class="form-control" id="oldPwd" placeholder="必填">
            </div>
          </div>
          <div class="form-group col-sm-12 row">
            <label for="oldPwd" class="col-form-label col-sm-2">职务编号：</label>
            <div class="col-sm-9 ml-5">
              <input  class="form-control" id="oldPwd">
            </div>
          </div>
          <div class="form-group col-sm-12 row">
            <label for="oldPwd" class="col-form-label col-sm-2">默认工时：</label>
            <div class="col-sm-9 ml-5">
              <input  class="form-control" id="oldPwd">
            </div>
          </div>
          <div class="form-group col-sm-12 row">
            <label for="oldPwd" class="col-form-label col-sm-2">工时计算方式：</label>
            <div class="col-sm-5 ml-5">
             <select class="custom-select">
               <option selected>----请选择----</option>
               <option value="1">One</option>
             </select>
            </div>
            <div class="col-sm-4">
              <input  class="form-control" id="oldPwd">
            </div>
            <div class="row col-sm-12">
              <div class="col-sm-2 ml-5"></div>
              <div class="col-sm-5 mt-2 ml-4 border border-white border-1 p-0 mb-4">
                <span>计算说明：以实际工作时间除以工时进行计算，例如：某工时为4小时/工的员工工作11小时后，计工数理为11/2=2工</span>
              </div>
            </div>
           </div>
            <div class="form-group col-sm-12 row">
              <label for="oldPwd" class="col-form-label col-sm-2">职务级别：</label>
              <div class="col-sm-9 ml-5">
                <select class="custom-select">
                  <option selected>---请选择---</option>
                  <option value="1">One</option>
                </select>
              </div>
            </div>
            <div class="form-group col-sm-12 row">
              <label for="oldPwd" class="col-form-label col-sm-2">部门排列位置为：</label>
              <div class="col-sm-9 ml-5">
                <select class="custom-select">
                  <option selected>---位于最后---</option>
                  <option value="1">One</option>
                </select>
              </div>
            </div>
            <div class="col-sm-12 row">
             <div class="col-sm-2 mr-5"></div>
              <div class="col-sm-4 ml-4">
             <input class="form-check-input" type="checkbox" id="Check1">
             <label class="form-check-label" for="Check2">
                位于前面（不选位于其后）
             </label>
             </div>
            </div>
            <div class="d-flex col-sm-12 justify-content-center">
              <a href="#New-tab-inner" class="btn btn-primary">新建</a>
            </div>
        </form>
      </div>
      <!-- 删除 -->
      <div class="tab-pane fade show " id="remove-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
          <div>
            <h1>选项四</h1>
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
