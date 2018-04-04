module.exports = `package $pkgName.ctrl;

import io.qixin.framework.context.Pager;
import io.qixin.framework.context.Res;
import io.qixin.framework.utils.JsonConvert;
import $pkgName.dto.$entityDto;
import $pkgName.dto.UserCacheInfo;
import $pkgName.entity.$entity;
import $pkgName.param.$entityParam;
import $pkgName.param.$entityUpdateParam;
import $pkgName.service.$entityService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by web-j on $createAt
 */
@Api(description = "")
@RestController
@RequestMapping("/$pluralize")
public class $entityCtrl extends BaseCtrl{

    @Autowired
    private $entityService $firstLowerService;

    @GetMapping("")
    public Res<Pager<$entityDto>> page(@ModelAttribute $entityParam param) {
        return $firstLowerService.page(param);
    }

    @GetMapping("/{id}")
    public Res<$entityDto> detail(@PathVariable("id") Integer id) {
        return $firstLowerService.detail(id);
    }

    @PostMapping("")
    public Res<$entity> create(@RequestBody $entityUpdateParam param) {
        param.setId(null);
        UserCacheInfo cacheInfo = this.getUserInfo();
        $entity $firstLower = JsonConvert.transferData(param, $entity.class);        
        $firstLower.setCreatedBy(cacheInfo.getId());
        $firstLower.setCreatedByName(cacheInfo.getUsername());
        $firstLower = $firstLowerService.save($firstLower);
        return new Res($firstLower);
    }

    @PutMapping("")
    public Res<$entity> update(@RequestBody $entityUpdateParam param) {
        UserCacheInfo cacheInfo = this.getUserInfo();
        $entity $firstLower = JsonConvert.transferData(param, $entity.class);        
        $firstLower.setUpdatedBy(cacheInfo.getId());
        $firstLower.setUpdatedByName(cacheInfo.getUsername());
        $firstLower = $firstLowerService.save($firstLower);
        return new Res($firstLower);
    }

    @DeleteMapping("/{id}")
    public Res delete(@PathVariable("id") Integer id) {
        $firstLowerService.delete(id);
        return new Res();
    }
}
`