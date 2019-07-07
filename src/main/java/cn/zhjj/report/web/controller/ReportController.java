/**  
* <p>Title: ReportController.java</p>  
* <p>Description: </p>   
* @author QEcode  
* @date 2019年7月7日  
* @version 1.0  
*/  
package cn.zhjj.report.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**  
 * <p>Title: ReportController.java</p>  
 * <p>Description: </p>   
 * @author QEcode  
 * @date 2019年7月7日  
 * @version 1.0  
 */
@Controller
public class ReportController {
    
    @RequestMapping("/report")
    public ModelAndView index(){
	ModelAndView model = new ModelAndView();
	model.setViewName("/userWeb/NewClue.jsp");
	return model;
    }
}
