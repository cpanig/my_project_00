<template>
<!--分站信息查询-->
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Tracking-tab" data-toggle="tab" href="#Tracking-inner" role="tab" aria-controls="dmg" aria-selected="true">分站信息查询</a>
    </li>
  </ul>
    <div class="tab-content " id="myTabContent">
      <div class="tab-pane fade show active" id="Tracking-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <table class="col-md-10 table table-hover" style="margin-top: 2%;">
            <tbody><tr>
                <th>设备号</th>
                <th>类型</th>
                <th>安装位置</th>
                <th>运行状态</th>
                <th>安装时间</th>
                <th>修改时间</th>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody></table>
        <div class=" col-md-10 text-center">
            <button type="button" class="btn btn-primary mr-1">导出Excel</button>
            <button type="button" class="btn btn-primary">打印</button>
        </div>
      </div>
    </div>
</div>
</template>

<script>
</script>

<style>
</style>
