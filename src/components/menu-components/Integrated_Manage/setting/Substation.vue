<template>
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
    <div class="tab-content " id="myTabContent">
      <!-- 显示 -->
      <div class="tab-pane fade show active" id="show-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-4 d-flex row justify-content-center">
              <h5>所有分站信息如下列表</h5>
              <table class="table table-hover" id="table">
                <thead>
                  <tr>
                    <th scope="col">序号</th>
                    <th scope="col">分站编号</th>
                    <th scope="col">分站地址</th>
                    <th scope="col">接口编号</th>
                    <th scope="col">上井口</th>
                    <th scope="col">分站类型</th>
                    <th scope="col">限制区</th>
                    <th scope="col">分站巡检</th>
                  </tr>
                </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
              </table>
        </form>
      </div>
      <!-- 新建 -->
      <div class="tab-pane fade show" id="new-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
          <h5 class="text-center">新建分站操作：在此新建一个全新的分站</h5>
          <div class="form-group col-sm-11 row ">
            <label for="oldPwd" class="col-form-label col-sm-2">请选择想要修改的分站：</label>
            <div class="col-sm-9 ml-5">
              <select class="custom-select">
                <option selected>---井下分站---</option>
                <option value="1">One</option>
              </select>
            </div>
          </div>
          <div class="form-group col-sm-11 row">
            <label for="oldPwd" class="col-form-label col-sm-2">分站编号：</label>
            <div class="col-sm-9 ml-5">
              <input  class="form-control"  placeholder="可选">
            </div>
          </div>
          <div class="form-group col-sm-11 row">
            <label for="oldPwd" class="col-form-label col-sm-2">接口编号：</label>
              <div class="col-sm-9 ml-5">
                <input  class="form-control" placeholder="可选">
              </div>
          </div>
          <div class="form-group col-sm-11 row">
            <label for="oldPwd" class="col-form-label col-sm-2">分站地址：</label>
            <div class="col-sm-9 ml-5">
              <input  class="form-control"  placeholder="可选">
            </div>
          </div>
          <div class="form-group col-sm-11 row">
            <label for="oldPwd" class="col-form-label col-sm-2">上井口：</label>
            <div class="col-sm-9 ml-5">
              <input  class="form-control"  placeholder="可选">
            </div>
          </div>
            <div class="form-group col-sm-11 row">
              <label for="oldPwd" class="col-form-label col-sm-2">分站类型：</label>
              <div class="col-sm-9 ml-5">
                <select class="custom-select">
                  <option selected>---井下分站---</option>
                  <option value="1">One</option>
                </select>
              </div>
            </div>
            <div class="col-sm-11 row">
             <div class="col-sm-2 mr-5"></div>
              <div class="col-sm-4 ml-4">
             <input class="form-check-input" type="checkbox" id="Check1">
             <label class="form-check-label" for="Check2">
                限制区
             </label>
             </div>
            </div>
            <div class="col-sm-11 row mt-4">
             <div class="col-sm-2 mr-5"></div>
              <div class="col-sm-4 ml-4">
             <input class="form-check-input" type="checkbox" id="Check1">
             <label class="form-check-label" for="Check2">
                分站巡检
             </label>
             </div>
            </div>
            <div class="d-flex col-sm-12 justify-content-center mt-5">
              <a href="#New-tab-inner" class="btn btn-primary">新建</a>
            </div>
        </form>
      </div>
      <!-- 修改 -->
      <div class="tab-pane fade show" id="verify-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
          <div class="form-group col-sm-11 row ">
            <label for="oldPwd" class="col-form-label col-sm-2">分站地址：</label>
            <div class="col-sm-9 ml-5">
              <input  class="form-control" placeholder="必填">
            </div>
          </div>
          <div class="form-group col-sm-11 row">
            <label for="oldPwd" class="col-form-label col-sm-2">分站编号：</label>
            <div class="col-sm-9 ml-5">
              <input  class="form-control"  placeholder="可选">
            </div>
          </div>
          <div class="form-group col-sm-11 row">
            <label for="oldPwd" class="col-form-label col-sm-2">接口编号：</label>
              <div class="col-sm-9 ml-5">
                <input  class="form-control" placeholder="可选">
              </div>
          </div>
          <div class="form-group col-sm-11 row">
            <label for="oldPwd" class="col-form-label col-sm-2">上井口：</label>
            <div class="col-sm-9 ml-5">
              <input  class="form-control"  placeholder="可选">
            </div>
            <div class="row col-sm-12">
              <div class="col-sm-2 ml-5"></div>
              <div class="col-sm-9 mt-2 ml-4 border border-white border-1 p-0 mb-4">
                <span>(注明：与该分站离得最近的井口分站)</span>
              </div>
            </div>
          </div>
            <div class="form-group col-sm-11 row">
              <label for="oldPwd" class="col-form-label col-sm-2">分站类型：</label>
              <div class="col-sm-9 ml-5">
                <select class="custom-select">
                  <option selected>---井下分站---</option>
                  <option value="1">One</option>
                </select>
              </div>
            </div>
            <div class="col-sm-11 row">
             <div class="col-sm-2 mr-5"></div>
              <div class="col-sm-4 ml-4">
             <input class="form-check-input" type="checkbox" id="Check1">
             <label class="form-check-label" for="Check2">
                限制区
             </label>
             </div>
            </div>
            <div class="col-sm-11 row mt-4">
             <div class="col-sm-2 mr-5"></div>
              <div class="col-sm-4 ml-4">
             <input class="form-check-input" type="checkbox" id="Check1">
             <label class="form-check-label" for="Check2">
                分站巡检
             </label>
             </div>
            </div>
            <div class="d-flex col-sm-12 justify-content-center mt-5">
              <a href="#New-tab-inner" class="btn btn-primary">新建</a>
            </div>
        </form>
      </div>
      <!-- 删除 -->
      <div class="tab-pane fade show" id="remove-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
          <h5 class="text-center">在此进行分站的删除操作，你确定要删除该分站后，在下面选择你想要删除的分站名称。</h5>
          <div class="form-group col-sm-11 row">
            <label for="oldPwd" class="col-form-label col-sm-2">欲删除分站的名：</label>
            <div class="col-sm-9 ml-5">
              <select class="custom-select">
                <option selected>---请选择---</option>
                <option value="1">One</option>
              </select>
            </div>
          </div>
          <div class="d-flex col-sm-12 justify-content-center mt-5">
            <a href="#New-tab-inner" class="btn btn-primary">确定</a>
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
