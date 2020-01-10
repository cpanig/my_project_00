<template>
<!-- 实时追踪 -->
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Tracking-tab" data-toggle="tab" href="#Tracking-inner" role="tab" aria-controls="dmg" aria-selected="true">员工实时追踪</a>
    </li>
  </ul>
  <div class="tab-content " id="myTabContent">
    <div class="tab-pane fade show active" id="Tracking-inner" role="tabpanel" aria-labelledby="dmg-tab">
      <form class="mt-5">
        <table class="table table-hover" id="table">
          <thead>
            <tr>
              <th scope="col">序号</th>
              <th scope="col">编号</th>
              <th scope="col">卡号</th>
              <th scope="col">姓名</th>
              <th scope="col">部门</th>
              <th scope="col">当前位置</th>
              <th scope="col">到达时间</th>
              <th scope="col">来源地</th>
              <th scope="col">下井时间</th>
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
