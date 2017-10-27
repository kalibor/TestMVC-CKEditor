using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TestCKEditor.ViewModel;

namespace TestCKEditor.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            CreateViewModel model = new CreateViewModel();
            return View(model);
        }

        [HttpPost]
        [ValidateInput(false)]
        public ActionResult Create(CreateViewModel model)
        {
            var data = Request.Form;

            return View();
        }

        public void ProcessRequest2()
        {
            HttpPostedFileBase uploads = HttpContext.Request.Files["upload"];

            var url = "https://az788688.vo.msecnd.net/assets/img/dotblog-logo@2x.png?v=2017.10.21.1";
            var CKEditorFuncNum = Request["CKEditorFuncNum"];

            var strResponse = "<script>window.parent.CKEDITOR.tools.callFunction(" + CKEditorFuncNum + ", '" + url + "');</script>";

            Response.Write(strResponse);
        }

        [ValidateInput(false)]
        public JsonResult ProcessRequest()
        {
            HttpPostedFileBase uploads = HttpContext.Request.Files["upload"];

            var url = "https://az788688.vo.msecnd.net/assets/img/dotblog-logo@2x.png?v=2017.10.21.1";

        
            var ee = new
            {
                uploaded = 1,
                fileName = "foo.jpg",
                url = url
            };


            return Json(ee);
        }

    }



}