package com.ruoyi.system.domain;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;

import java.util.Map;

/**
 * 数图行新闻资讯对象 web_news
 * 
 * @author wuhaojie
 * @date 2021-07-17
 */
public class WebNews extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 文章ID */
    @Excel(name = "文章ID")
    private String titleId;

    /** 标题 */
    @Excel(name = "标题")
    private String title;

    /** 封面图片 */
    @Excel(name = "封面图片")
    private String indexImgPath;

    /** 文章内容 */
    @Excel(name = "文章内容")
    private String content;

    /** 其他链接资源 */
    @Excel(name = "其他链接资源")
    private String url;

    /** 标签 */
    @Excel(name = "标签")
    private String tag;

    /** 是否置顶 */
    @Excel(name = "是否置顶")
    private Integer hot;

    /** 浏览量 */
    @Excel(name = "浏览量")
    private Long visitCount;

    /** 发布来源 */
    @Excel(name = "发布来源")
    private String source;

    /** 是否发布 */
    @Excel(name = "是否发布")
    private Integer publish;


    public void setTitleId(String titleId) 
    {
        this.titleId = titleId;
    }

    public String getTitleId() 
    {
        return titleId;
    }
    public void setTitle(String title) 
    {
        this.title = title;
    }

    public String getTitle() 
    {
        return title;
    }
    public void setIndexImgPath(String indexImgPath) 
    {
        this.indexImgPath = indexImgPath;
    }

    public String getIndexImgPath() 
    {
        return indexImgPath;
    }
    public void setContent(String content) 
    {
        this.content = content;
    }

    public String getContent() 
    {
        return content;
    }
    public void setUrl(String url) 
    {
        this.url = url;
    }

    public String getUrl() 
    {
        return url;
    }
    public void setTag(String tag) 
    {
        this.tag = tag;
    }

    public String getTag() 
    {
        return tag;
    }
    public void setHot(Integer hot) 
    {
        this.hot = hot;
    }

    public Integer getHot() 
    {
        return hot;
    }
    public void setVisitCount(Long visitCount) 
    {
        this.visitCount = visitCount;
    }

    public Long getVisitCount() 
    {
        return visitCount;
    }
    public void setSource(String source) 
    {
        this.source = source;
    }

    public String getSource() 
    {
        return source;
    }
    public void setPublish(Integer publish) 
    {
        this.publish = publish;
    }

    public Integer getPublish() 
    {
        return publish;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("titleId", getTitleId())
            .append("title", getTitle())
            .append("indexImgPath", getIndexImgPath())
            .append("content", getContent())
            .append("url", getUrl())
            .append("tag", getTag())
            .append("hot", getHot())
            .append("visitCount", getVisitCount())
            .append("source", getSource())
            .append("publish", getPublish())
            .append("updateTime", getUpdateTime())
            .append("createTime", getCreateTime())
            .toString();
    }
}
