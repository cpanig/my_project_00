<template>
  <div class="main-right mt-5">
    <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="ChangePsw-tab" data-toggle="tab" href="#ChangePsw-inner" role="tab" aria-controls="home" aria-selected="true">操作日记管理</a>
      </li>
    </ul>
    <div class="tab-content " id="myTabContent">
      <div class="tab-pane fade show active" id="ChangePsw-inner" role="tabpanel" aria-labelledby="home-tab">
        <form class="mt-4">
          <div class="form-group row col-sm-12">
            <label for="input19" class="col-form-label col-sm-1">操作类别：</label>
            <div class="col-sm-4">
              <select class="custom-select">
                <option selected>----全部----</option>
                <option value="1">……</option>
              </select>
            </div>
            <label for="input20" class="col-form-label col-sm-1">操作等级：</label>
              <div class="col-sm-4">
                <select class="custom-select">
                  <option selected>----全部----</option>
                  <option value="1">……</option>
                </select>
              </div>
          </div>
            <div class="form-group row col-sm-12">
              <label for="input19" class="col-form-label col-sm-1 ">被操作员工：</label>
              <div class="col-sm-4">
                <input type="email" class="form-control" id="input19">
              </div>
              <label for="input20" class="col-form-label col-sm-1">操作员名：</label>
              <div class="col-sm-4">
                <input type="email" class="form-control" id="input19">
              </div>
            </div>
          <div class="form-group row col-sm-12">
            <label for="input19" class="col-form-label col-sm-1">被操作员工</label>
            <div class="col-sm-4">
              <input type="email" class="form-control" id="input19">
            </div>
            <div class="custom-control custom-checkbox mt-2">
              <input type="checkbox" class="custom-control-input" id="customCheck1">
              <label class="custom-control-label" for="customCheck1">以月查询</label>
            </div>
            <div class="d-flex col-sm-12 mt-4 ">
              <button type="submit" class="btn btn-primary mr-1 offset-4">选择</button>
              <button type="submit" class="btn btn-primary mr-1">确定</button>
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
          <div class="d-flex col-sm-12 offset-4">
            <button type="submit" class="btn btn-primary mr-5">导出到EXcel</button>
            <button type="submit" class="btn btn-primary ml-5">打印</button>
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
