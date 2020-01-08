<template>
<div>
  <form class="mt-5">
    <div class="form-group col-sm-11 row">
      <label for="oldPwd" class="col-form-label col-sm-1">部门：</label>
      <div class="col-sm-3 ">
        <select class="custom-select">
          <option selected>----全部----</option>
          <option value="1">One</option>
        </select>
      </div>
      <label for="oldPwd" class="col-form-label col-sm-1">职务：</label>
      <div class="col-sm-3 ">
        <select class="custom-select">
          <option selected>----全部----</option>
          <option value="1">One</option>
        </select>
      </div>
      <label for="oldPwd" class="col-form-label col-sm-1">职称：</label>
      <div class="col-sm-3 ">
        <select class="custom-select">
          <option selected>----全部----</option>
          <option value="1">One</option>
        </select>
      </div>
    </div>
    <div class="form-group col-sm-11 row">
      <label for="oldPwd" class="col-form-label col-sm-1">工种：</label>
      <div class="col-sm-3 ">
        <select class="custom-select">
          <option selected>----全部----</option>
          <option value="1">One</option>
        </select>
      </div>
      <label for="oldPwd" class="col-form-label col-sm-1">级别</label>
      <div class="col-sm-3 ">
        <select class="custom-select">
          <option selected>----全部----</option>
          <option value="1">One</option>
        </select>
      </div>
      <label for="oldPwd" class="col-form-label col-sm-1">卡号：</label>
      <div class="col-sm-1 ">
        <select class="custom-select">
          <option selected>===</option>
          <option value="1">One</option>
        </select>
      </div>
      <div class="col-sm-2">
        <input  class="form-control" id="oldPwd">
      </div>
    </div>
    <div class="form-group col-sm-11 row">
      <label for="oldPwd" class="col-form-label col-sm-1">姓名：</label>
      <div class="col-sm-1">
        <input  class="form-control" id="oldPwd">
      </div>
      <div class="col-sm-2 mt-2 offset-1">
      <input class="form-check-input" type="checkbox" id="Check1">
      <label class="form-check-label" for="Check2">
         模糊查询
      </label>
      </div>
      <div class="col-sm-2 mt-2 offset-1">
      <input class="form-check-input" type="checkbox" id="Check1">
      <label class="form-check-label" for="Check2">
         显示 卡号姓名
      </label>
      </div>
      <div class="d-flex col-sm-12 mt-4  ">
        <button type="submit" class="btn btn-primary mr-1 offset-4">选择</button>
        <button type="submit" class="btn btn-primary mr-1">查询</button>
        <button type="submit" class="btn btn-primary">删除</button>
      </div>
    </div>
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
</template>

<script>
</script>

<style>
</style>
