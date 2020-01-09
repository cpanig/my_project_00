<template>
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="SearchUser-tab" data-toggle="tab" href="#SearchUser-inner" role="tab" aria-controls="dmg" aria-selected="true">用户查询</a>
    </li>
  </ul>
    <div class="tab-content " id="myTabContent">
      <div class="tab-pane fade show active" id="SearchUser-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
          <div class="form-group row col-sm-12">
            <label for="input19" class="col-form-label col-sm-2">用户权限等级：</label>
            <div class="col-sm-4">
              <select class="custom-select">
                <option selected>----全部----</option>
                <option value="1">……</option>
              </select>
            </div>
            <div class="col-md-2">
              <button type="submit" class="btn btn-primary">提交</button>
            </div>
          </div>
          <table class="table table-hover" id="table">
            <thead>
              <tr>
                <th scope="col">序号</th>
                <th scope="col">用户名</th>
                <th scope="col">用户类型</th>
                <th scope="col">最后登陆日期</th>
                <th scope="col">登录次数</th>
                <th scope="col">创建日期</th>
                <th scope="col">修改数据</th>
                <th scope="col">创建用户</th>
                <th scope="col">使用者</th>
              </tr>
            </thead>
              <tbody>
                <tr>
                </tr>
              </tbody>
          </table>
          <div class="d-flex col-sm-12 mt-5 offset-4">
            <button type="submit" class="btn btn-primary mr-1">确定</button>
            <button type="submit" class="btn btn-primary">删除</button>
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
