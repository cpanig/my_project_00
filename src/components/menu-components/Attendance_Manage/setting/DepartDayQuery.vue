<template>
<!-- 部门日考勤查询 -->
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Tracking-tab" data-toggle="tab" href="#Tracking-inner" role="tab" aria-controls="dmg" aria-selected="true">部门日考勤查询</a>
    </li>
  </ul>
  <div class="tab-content " id="myTabContent">
    <div class="tab-pane fade show active" id="Tracking-inner" role="tabpanel" aria-labelledby="dmg-tab">
      <form class="mt-5 ml-2">
        <div class="form-group row">
          <label for="inputEmail8" class="col-form-label col-sm-1">部门：</label>
          <div class="col-sm-4">
            <select class="custom-select">
                <option selected>1</option>
                <option value="1">One</option>
            </select>
          </div>
          <label for="inputEmail9" class="col-form-label col-sm-1">小组：</label>
          <div class="col-sm-4">
              <select class="custom-select">
                <option selected>1</option>
                <option value="1">One</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail8" class="col-form-label col-sm-1">工种：</label>
            <div class="col-sm-4">
              <select class="custom-select">
                  <option selected>1</option>
                  <option value="1">One</option>
              </select>
            </div>
            <label for="inputEmail9" class="col-form-label col-sm-1">卡号：</label>
            <div class="col-sm-2">
                <select class="custom-select">
                  <option selected>1</option>
                  <option value="1">One</option>
                </select>
              </div>
               <input class="col-md-2 form-control ml-0" id="formInput3" type="text">
            </div>
            <div class="form-group row">
              <label for="inputEmail8" class="col-form-label col-sm-1">下井分站：</label>
              <div class="col-sm-4">
                <select class="custom-select">
                    <option selected>1</option>
                    <option value="1">One</option>
                </select>
              </div>
              <label for="inputEmail9" class="col-form-label col-sm-1">班次：</label>
              <div class="col-sm-4">
                  <select class="custom-select">
                    <option selected>1</option>
                    <option value="1">One</option>
                  </select>
                </div>
              </div>
        <div class="form-group row">
          <label for="inputEmail8" class="col-form-label col-sm-1">日期：</label>
          <div class="col-sm-4">
            <input type="date" class="form-control">
          </div>
          <label for="inputEmail9" class="col-form-label col-sm-1">上井分站：</label>
          <div class="col-sm-4">
            <select class="custom-select">
              <option selected>1</option>
              <option value="1">One</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputEmail8" class="col-form-label col-sm-1">时间段选择：</label>
          <div class="col-sm-4">
            <input type="date" class="form-control">
          </div>
          <label for="inputEmail9" class="col-form-label col-sm-1">至：</label>
          <div class="col-sm-3">
            <input type="date" class="form-control">
          </div>
          <div class="col-sm-1 mt-2">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="customCheck1">
              <label class="custom-control-label" for="customCheck1">全天</label>
            </div>
          </div>
        </div>
        <div class="col-sm-12 offset-5">
          <button type="submit" class="btn btn-primary ml-5">查询</button>
        </div>
        <table class="table table-hover mt-4" id="table">
          <thead>
            <tr>
              <th scope="col">序号</th>
              <th scope="col">工号</th>
              <th scope="col">卡号</th>
              <th scope="col">姓名</th>
              <th scope="col">部门</th>
              <th scope="col">下井时间</th>
              <th scope="col">上井时间</th>
              <th scope="col">时长</th>
              <th scope="col">班次</th>
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
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
              </tr>
            </tbody>
        </table>
        <div class="d-flex col-sm-12 offset-4">
          <button type="submit" class="btn btn-primary mr-1">导出到EXcel</button>
          <button type="submit" class="btn btn-primary">打印</button>
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
