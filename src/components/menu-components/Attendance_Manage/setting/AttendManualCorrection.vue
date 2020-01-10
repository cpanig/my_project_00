<template>
<!-- 考勤日手动修正 -->
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Tracking-tab" data-toggle="tab" href="#Tracking-inner" role="tab" aria-controls="dmg" aria-selected="true">考勤日手动修正</a>
    </li>
  </ul>
    <div class="tab-content " id="myTabContent">
      <div class="tab-pane fade show active" id="Tracking-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
              <div class="form-group row">
                  <div class="col-md-8 row">
                      <div class="col-md-12 form-group row">
                          <label for="" class="col-md-2 col-form-label ">部门：</label>
                          <select class="form-control col-md-7">
                              <option selected disabled="">----全部----</option>
                              <option></option>
                              <option></option>
                          </select>
                      </div>
                      <div class="col-md-12 form-group row">
                          <label for="" class="col-md-2 col-form-label ">班组：</label>
                          <select class="form-control col-md-7">
                              <option selected disabled="">----全部----</option>
                              <option></option>
                              <option></option>
                          </select>
                      </div>
                      <div class="col-md-12 form-group row">
                          <label for="" class="col-md-2 col-form-label ">日期：</label>
                          <input class="form-control col-md-3 mr-5" type="datetime-local" value="">
                          <div class="col-md-2">
                              <input class="form-check-input" type="checkbox" name="">
                              <label class="form-check-label">以月列出</label>
                          </div>
                          <div class="col-md-2">
                              <input class="form-check-input" type="checkbox" name="">
                              <label class="form-check-label">不列当天</label>
                          </div>
                      </div>
                      <div class="col-md-12 form-group row">
                          <label for="" class="col-md-2 col-form-label ">卡号：</label>
                          <select class="form-control col-md-7">
                              <option selected disabled="">----全部----</option>
                              <option></option>
                              <option></option>
                          </select>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="col-md-12 form-group row">
                          <input class="form-check-input" type="radio" name="exampleRadios" id="a1" value="" checked="">
                          <label class="form-check-label" for="a1">列出所有的考勤记录</label>
                      </div>
                      <div class="col-md-12 form-group row">
                          <input class="form-check-input" type="radio" name="exampleRadios" id="a2" value="">
                          <label class="form-check-label" for="a2">列出没有出井时间的考勤记录</label>
                      </div>
                      <div class="col-md-12 form-group row">
                          <input class="form-check-input" type="radio" name="exampleRadios" id="a3" value="">
                          <label class="form-check-label" for="a3">列出上下井间隔小于</label>
                          <div class="col-md-3">
                              <input class="form-control" type="text" value="1">
                          </div>
                          <label class="form-check-label" for="a3">分钟的考勤记录</label>
                      </div>
                  </div>
              </div>
              <div class="offset-5">
                  <button type="button" class="btn btn-primary mr-1">添加</button>
                  <button type="button" class="btn btn-primary">查询</button>
              </div>
          <table class="table table-hover mt-3">
              <tbody><tr>
                  <th scope="col">序号</th>
                  <th scope="col">卡号</th>
                  <th scope="col">姓名</th>
                  <th scope="col">部门</th>
                  <th scope="col">下井时间</th>
                  <th scope="col">上井时间</th>
                  <th scope="col">最后出现时间</th>
                  <th scope="col">操作</th>
              </tr>
              <tr>
                  <td colspan="8">
                      <div class="d-flex justify-content-end">
                          <button type="button" class="btn btn-primary mr-1">修改</button>
                          <button type="button" class="btn btn-primary">确定</button>
                      </div>
                  </td>

              </tr>
              <tr>
                  <td scope="row" colspan="8" class="text-center">没有找到对应的记录。</td>
              </tr>
          </tbody></table>
          <div class="offset-5">
              <button type="button" class="btn btn-primary mr-1">修改</button>
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
