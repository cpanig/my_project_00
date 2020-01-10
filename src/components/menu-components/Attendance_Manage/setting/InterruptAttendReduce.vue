<template>
<!-- 中断考勤归并 -->
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Tracking-tab" data-toggle="tab" href="#Tracking-inner" role="tab" aria-controls="dmg" aria-selected="true">中断考勤归并</a>
    </li>
  </ul>
    <div class="tab-content " id="myTabContent">
      <div class="tab-pane fade show active" id="Tracking-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
          <div class="form-group row">
              <label for="" class="col-md-1 ">部门：</label>
              <select class="form-control col-md-4">
                  <option selected disabled="">----全部----</option>
                  <option></option>
                  <option></option>
              </select>
              <label for="" class="col-md-1 ">考勤日期：</label>
              <div class="col-md-4 row">
                  <input class="form-control" type="datetime-local" value="">
                  <div class="col-md-4">
                      <input class="form-check-input" type="checkbox">
                      <label class="form-check-label">以月列出</label>
                  </div>
                  <div class="col-md-4">
                      <input class="form-check-input" type="checkbox">
                      <label class="form-check-label">前一天</label>
                  </div>
                  <div class="col-md-3">
                      <input class="form-check-input" type="checkbox">
                      <label class="form-check-label">后一天</label>
                  </div>
              </div>
          </div>
          <div class="row form-group">
              <label for="" class="col-md-1 ">员工卡号：</label>
              <select class="form-control col-md-2">
                  <option>=</option>
                  <option>2</option>
                  <option>3</option>
              </select>
              <input type="text" class="form-control col-md-2" name="" id="">
              <label class="col-md-1">且</label>
              <select class="form-control col-md-2">
                  <option>=</option>
                  <option>2</option>
                  <option>3</option>
              </select>
              <input class="form-control col-md-2" type="text">
              <button type="button" class="btn btn-primary">卡号选择</button>
          </div>
          <div class="row form-group offset-1">
              <div class="col-sm-2 form-check">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="">
                  <label class="form-check-label" for="exampleRadios1">列出全部考勤记录</label>
              </div>
              <div class="col-sm-3 form-check">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">
                  <label class="form-check-label" for="exampleRadios1">列出不完整记录(无下或上井时间)</label>
              </div>
          </div>
          <div class="row">
              <div class="common-button offset-5">
                  <button type="button" class="btn btn-primary">查询</button>
              </div>
          </div>
          <table class="table table-hover mt-5">
              <tbody><tr>
                  <th scope="col">序号</th>
                  <th scope="col">卡号</th>
                  <th scope="col">姓名</th>
                  <th scope="col">下井时间</th>
                  <th scope="col"> 最近分站时间</th>
                  <th scope="col">出井时间</th>
                  <th scope="col">选择</th>
              </tr>
              <tr>
                  <td scope="row">1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                      <input class="form-check-input" type="checkbox">
                  </td>
              </tr>
          </tbody></table>
          <div class="offset-5">
              <button type="button" class="btn btn-primary">确定</button>
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
