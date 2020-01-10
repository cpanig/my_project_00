<template>
  <!-- 示意图选择 -->
  <div class="main-right mt-5">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="SketchSelet-tab" data-toggle="tab" href="#SketchSelet-inner" role="tab" aria-controls="home" aria-selected="true">示意图选择</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="row mt-3 mb-5 ml-3">
        <span class="col-md-6">该矿上传所有示意图如下选择，请选择显示的示意图，上传示意图请点击</span>
        <form class="col-md-4">
          <from-group>
            <input type="file"  class="form-control-file">
          </from-group>
        </form>
      </div>
      <div class="tab-pane fade show active" id="SketchSelet-inner" role="tabpanel" aria-labelledby="home-tab">
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
        <div class="form-group row mt-5">
          <div class="col-xs-1 offset-5">
            <button type="submit" class="btn btn-primary">确认</button>
          </div>
          <div class="col-xs-1 ml-1">
            <button type="submit" class="btn btn-primary">删除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
  span{
    color: white;
  }
  #table >tbody > tr:hover{
    color: white;
    background-color: rgb(36, 61, 92);
  }
  #table{
    color: white;
    max-width: 90%;
  }
</style>
