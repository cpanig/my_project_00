<template>
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Tracking-tab" data-toggle="tab" href="#Tracking-inner" role="tab" aria-controls="dmg" aria-selected="true">员工选择追踪</a>
    </li>
  </ul>
  <div class="tab-content " id="myTabContent">
    <div class="tab-pane fade show active" id="Tracking-inner" role="tabpanel" aria-labelledby="dmg-tab">
      <form class="mt-5">
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
