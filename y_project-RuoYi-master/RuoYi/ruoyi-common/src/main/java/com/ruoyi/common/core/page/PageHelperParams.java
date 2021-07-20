package com.ruoyi.common.core.page;

import com.github.pagehelper.PageHelper;
import com.ruoyi.common.core.domain.BaseEntity;
import com.ruoyi.common.utils.StringUtils;
import com.ruoyi.common.utils.sql.SqlUtil;

import java.util.Map;

/**
 * @author 吴浩杰
 * @version 1.0.1
 * @email wuhaojie@shutuxing.com
 * @date 2021/7/19 11:05
 * @Describe 分页查询参数
 */
public class PageHelperParams extends BaseEntity {
    private Integer pageSize = 10;
    private Integer pageNum = 1;
    private String orderBy = null;
    private String isAsc = null;

    public void pageParams(BaseEntity obj) {
        Map<String, Object> mapDict = obj.getParams();
        if (mapDict.containsKey("pageSize")) {
            pageSize = (Integer) mapDict.get("pageSize");
        }
        if (mapDict.containsKey("pageNum")) {
            pageNum = (Integer) mapDict.get("pageNum");
        }
        if (mapDict.containsKey("isAsc")) {
            isAsc = (String) mapDict.get("isAsc");
            if (isAsc.equals("asc")) {
                isAsc = "asc";
            } else {
                isAsc = "desc";
            }
        }
        if (mapDict.containsKey("orderByColumn")) {
            orderBy = SqlUtil.escapeOrderBySql(StringUtils.toUnderScoreCase((String) mapDict.get("orderByColumn")) + " " + isAsc);

        }
        if (StringUtils.isNotNull(pageNum) && StringUtils.isNotNull(pageSize)) {
            PageHelper.startPage(pageNum, pageSize, orderBy);
        }
    }

}
