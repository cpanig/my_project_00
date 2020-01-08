<template>
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Tracking-tab" data-toggle="tab" href="#Tracking-inner" role="tab" aria-controls="dmg" aria-selected="true">井下人员追踪</a>
    </li>
  </ul>
  <div class="tab-content " id="myTabContent">
    <div class="tab-pane fade show active" id="Tracking-inner" role="tabpanel" aria-labelledby="dmg-tab">
      <form class="mt-5">
        <div class="form-group col-sm-11 row">
          <label for="oldPwd" class="col-form-label col-sm-2">部门名称：</label>
          <div class="col-sm-4 ">
            <select class="custom-select">
              <option selected>----全部----</option>
              <option value="1">One</option>
            </select>
          </div>
          <div class="col-sm-2 mt-2 offset-1 ">
          <input class="form-check-input" type="checkbox" id="Check1">
          <label class="form-check-label" for="Check2">
             列出员工细节
          </label>
          </div>
        </div>
        <div class="form-group col-sm-11 row">
          <label for="oldPwd" class="col-form-label col-sm-2">工种：</label>
          <div class="col-sm-4 ">
            <select class="custom-select">
              <option selected>----全部----</option>
              <option value="1">One</option>
            </select>
          </div>
          <div class="col-sm-2 mt-2 offset-1 ">
          <input class="form-check-input" type="checkbox" id="Check1">
          <label class="form-check-label" for="Check2">
             模糊查询
          </label>
          </div>
          <div class="col-sm-2 mt-2 offset-1">
          <input class="form-check-input" type="checkbox" id="Check1">
          <label class="form-check-label" for="Check2">
             统计人数
          </label>
          </div>
        </div>
        <div class="d-flex col-sm-12 d-flex">
          <button type="submit" class="btn btn-secondary mr-1 offset-5">重新查询条件</button>
          <button type="submit" class="btn btn-primary">查询</button>
        </div>
        <table class="table table-hover mt-4" id="table">
          <thead>
            <tr>
              <th scope="col">序号</th>
              <th scope="col">编号</th>
              <th scope="col">卡号</th>
              <th scope="col">姓名</th>
              <th scope="col">部门</th>
              <th scope="col">当前位置</th>
              <th scope="col">下井时间</th>
              <th scope="col">在此停留</th>
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
        <div class="d-flex col-sm-12 d-flex">
          <button type="submit" class="btn btn-primary mr-1 offset-5">导出到EXcel</button>
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
