<template>
    <div class="main-right mt-5">
      <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="DepartManage-tab" data-toggle="tab" href="#DepartManage-inner" role="tab" aria-controls="dmg" aria-selected="true">部门管理</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="New-tab" data-toggle="tab" href="#New-tab-inner" role="tab" aria-controls="dmg" aria-selected="true">新建</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="Change-tab" data-toggle="tab" href="#Change-inner" role="tab" aria-controls="dmg" aria-selected="true">修改</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="Remove-tab" data-toggle="tab" href="#Remove-inner" role="tab" aria-controls="dmg" aria-selected="true">删除</a>
        </li>
      </ul>
      <div class="tab-content " id="myTabContent">
      <!-- 部门管理 -->
      <div class="tab-pane fade show active" id="DepartManage-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-1">
          <table class="table table-hover" id="table">
            <thead>
              <tr>
                <th scope="col">序号</th>
                <th scope="col">示意图名称</th>
                <th scope="col">上传时间</th>
                <th scope="col">上传人</th>
                <th scope="col">描述</th>
                <th scope="col">选择</th>
              </tr>
            </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                   <td></td>
                </tr>
              </tbody>
          </table>
        </form>
      </div>
      <!-- 新建 -->
      <div class="tab-pane fade show" id="New-tab-inner" role="tabpane2" aria-labelledby="dmg-tab">
        <form class="mt-4 ml-3 row">
          <div class="form-group col-sm-12 row ">
            <label for="oldPwd" class="col-form-label col-sm-2">部门名称</label>
            <div class="col-sm-9 ml-5">
              <input  class="form-control" id="oldPwd" placeholder="必填">
            </div>
          </div>
          <div class="form-group col-sm-12 row">
            <label for="oldPwd" class="col-form-label col-sm-2">部门编号</label>
            <div class="col-sm-9 ml-5">
              <input  class="form-control" id="oldPwd">
            </div>
          </div>
          <div class="form-check row  col-sm-12 d-flex  mt-0">
            <div class="col-sm-2 mr-3">
            <label for="inputEmail7" class="col-form-label">该部门有上属部门并为其指定：</label>
            </div>
            <div class="col-sm-3 ml-5 mt-2">
            <input class="form-check-input" type="checkbox" id="Check1">
            <label class="form-check-label" for="Check2">
               该部门有上属部门并为其指定
            </label>
            </div>
          </div>
          <div class="form-group col-sm-12 row">
            <label for="oldPwd" class="col-form-label col-sm-2">上属部门</label>
            <div class="col-sm-9 ml-5">
             <select class="custom-select">
               <option selected>----请选择----</option>
               <option value="1">One</option>
             </select>
            </div>
            <div class="row col-sm-12">
              <div class="col-sm-2 ml-5"></div>
              <div class="col-sm-9 mt-2 ml-1">
                <span class="border border-white border-1">计算说明：以实际工作时间除以工时进行计算，例如：某工时为4小时/工的员工工作11小时后，计工数理为11/2=2工</span>
              </div>
            </div>
          </div>
          <div class="form-group col-sm-12 row">
            <label for="oldPwd" class="col-form-label col-sm-2">默认津贴</label>
            <div class="col-sm-9 ml-5">
              <select class="custom-select">
                <option selected>----请选择----</option>
                <option value="1">One</option>
              </select>
            </div>
          </div>
          <div class="form-group col-sm-12 row">
            <label for="oldPwd" class="col-form-label col-sm-2">指定部门特殊性</label>
            <div class="col-sm-9 ml-5">
              <select class="custom-select">
                <option selected>不享受</option>
                <option value="1">One</option>
              </select>
            </div>
          </div>
          <div class="form-group col-sm-12 row">
            <label for="oldPwd" class="col-form-label col-sm-2">请选择</label>
            <div class="col-sm-9 ml-5">
              <select class="custom-select">
                <option selected>----位于最后----</option>
                <option value="1">One</option>
              </select>
            </div>
          </div>
          <div class="form-check row  col-sm-12 d-flex align-items-center">
            <div class="col-sm-3 offset-3">
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
      <!-- 修改 -->
      <!-- 修改 -->
      <!-- 修改 -->
      <!-- 修改 -->
      <div class="tab-pane fade show" id="Change-inner" role="tabpane3" aria-labelledby="dmg-tab">
        <form class="mt-4 ml-3 row">
          <div class="form-group col-sm-12 row">
            <label for="oldPwd" class="col-form-label col-sm-2">清选择要修改的部门</label>
            <div class="col-sm-9 ml-5">
              <select class="custom-select">
                <option selected>----请选择----</option>
                <option value="1">One</option>
              </select>
            </div>
          </div>
          <div class="form-group col-sm-12 row">
            <label for="oldPwd" class="col-form-label col-sm-2">部门名称</label>
            <div class="col-sm-9 ml-5">
              <input  class="form-control" id="oldPwd">
            </div>
          </div>
          <div class="form-check row  col-sm-12 d-flex  mt-0">
            <div class="col-sm-2 mr-3">
            <label for="inputEmail7" class="col-form-label">该部门有上属部门并为其指定：</label>
            </div>
            <div class="col-sm-3 ml-5 mt-2">
            <input class="form-check-input" type="checkbox" id="Check1">
            <label class="form-check-label" for="Check2">
               该部门有上属部门并为其指定
            </label>
            </div>
          </div>
          <div class="form-group col-sm-12 row">
            <label for="oldPwd" class="col-form-label col-sm-2">上属部门</label>
            <div class="col-sm-9 ml-5">
             <select class="custom-select">
               <option selected>----请选择----</option>
               <option value="1">One</option>
             </select>
            </div>
          </div>
          <div class="form-group col-sm-12 row">
            <label for="oldPwd" class="col-form-label col-sm-2">该部门职工默认工时：</label>
            <div class="col-sm-9 ml-5">
              <input  class="form-control" id="oldPwd">
            </div>
            <div class="form-check row  col-sm-12 d-flex align-items-center">
              <div class="col-sm-2 mr-4"></div>
              <div class="col-sm-3 ml-5">
              <input class="form-check-input" type="checkbox" id="Check1">
              <label class="form-check-label" for="Check2">
                 工时应用到部门所有人
              </label>
              </div>
            </div>
          </div>
          <div class="form-group col-sm-12 row mt-0">
            <label for="oldPwd" class="col-form-label col-sm-2">该部门职工默认津贴：</label>
            <div class="col-sm-9 ml-5">
              <select class="custom-select">
                <option selected>----请选择----</option>
                <option value="1">One</option>
              </select>
            </div>
            <div class="form-check row  col-sm-12 d-flex align-items-center">
              <div class="col-sm-2 mr-4"></div>
              <div class="col-sm-3 ml-5">
              <input class="form-check-input" type="checkbox" id="Check1">
              <label class="form-check-label" for="Check2">
                 工时应用到部门所有人
              </label>
              </div>
            </div>
          </div>
          <div class="form-group col-sm-12 row mt-0">
            <label for="oldPwd" class="col-form-label col-sm-2">部门特殊性</label>
            <div class="col-sm-9 ml-5">
              <select class="custom-select">
                <option selected>不享受</option>
                <option value="1">One</option>
              </select>
            </div>
          </div>
          <div class="form-group col-sm-12 row">
            <label for="oldPwd" class="col-form-label col-sm-2">请选择</label>
            <div class="col-sm-9 ml-5">
              <select class="custom-select">
                <option selected>----位于最后----</option>
                <option value="1">One</option>
              </select>
            </div>
          </div>
          <div class="form-group col-sm-12 row">
            <label for="oldPwd" class="col-form-label col-sm-2">工时计算方式：</label>
            <div class="col-sm-6 ml-5">
              <select class="custom-select">
                <option selected>按工作时长计算</option>
                <option value="1">One</option>
              </select>
            </div>
            <div class="col-sm-3">
              <input  class="form-control" id="oldPwd">
            </div>
          </div>
          <div class="form-group col-sm-12 row">
            <label for="oldPwd" class="col-form-label col-sm-2">部门排列位置</label>
            <div class="col-sm-9 ml-5">
              <select class="custom-select">
                <option selected>不享受</option>
                <option value="1">One</option>
              </select>
            </div>
          </div>
          <div class="form-check row  col-sm-12 d-flex align-items-center">
            <div class="col-sm-3 offset-3">
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
      <div class="tab-pane fade show" id="Remove-inner" role="tabpane4" aria-labelledby="dmg-tab">
        <h1>选项4</h1>
        </div>
      </div>
     </div>
</template>

<script>
</script>

<style>
</style>
