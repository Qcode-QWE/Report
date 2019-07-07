package cn.zhjj.report.web.filter;

import java.io.File;
import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FileUtils;

import cn.zhjj.report.util.UploadUtil;

public class ImageFilter implements Filter {

    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        //将请求的图片路径修改为磁盘的路径
        HttpServletRequest req = (HttpServletRequest) servletRequest;

        String uri = req.getRequestURI();
        //找到文件,并响应给浏览器
        File file = new File(UploadUtil.commonPath, uri);
        if (file.exists()) {
            servletResponse.getOutputStream().write(FileUtils.readFileToByteArray(file));
        } else {
            //放行
            filterChain.doFilter(req,servletResponse);
        }
    }


    public void init(FilterConfig filterConfig) throws ServletException {

    }


    public void destroy() {

    }
}
