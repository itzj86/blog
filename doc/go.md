## GO语言学习笔记
### 变量
- 变量
    > 第一种
    > **var 变量名 变量类型**
    ```go
    var name string = "王二狗"
    fmt.Printf("名字：%s\n",name)
    ```
    > 第二种（类型推导）
    ```go
    var name = "王二狗"
    fmt.Printf("名字：%s,变量类型：%T\n",name)
    // 通过逗号，可以多个变量一起定义，也可以通过小括号定义一组变量
    var name,age = "王二狗",100
    var (
        name string = "王二狗"
        age int = 100
    )
    ```
    > 第三种简短定义（:=）
    ```go
    name := "王二狗"
    fmt.Printf("名字：%s\n",name)
    ```
- 变量的注意事项
    > 通过 **&变量名** 来获取内存地址
    ```go
    var age int = 100
    fmt.Printf("年龄:%d\n , 内存地址：&age--%p",age,&age)
    ```
    > 注意事项  
    1. 变量必须在定义后才能使用
    2. 变量类型和赋值必须一致
    3. 同一个作用于中，变量名不能重复
    4. := 简短定义方式，左边变量至少有一个是新的定义
    5. := 简短定义方式不能定义全局变量
    6. 变量定义了就得用，否者无法通过编译
### 常量
- 定义常量 
    > 和变量定义差不多，只是需要使用 **const** 而不是使用 var  
    > const 常量名 类型
    ```go
    const PI float = 3.1415926
    // 组声明
    const (
        PI = 3.14
        P // 默认值为上一行的
    )
    // 特殊常量 iota
    const (
        a=iota  // 0
        b=iota  // 1
        c=iota  // 2
    )
    ```
    > 注意事项
    + 一组赋值常量的时候，如果没有初始值，则默认为上一行值  
    + 特殊常量 **iota** 初始**默认值**为**0**，每定义**一个变量**就自动**增加1**，直到下一个const出现才清零
### 基本数据类型
```go
/** 基本数据类型
* 布尔类型:bool,[true,false]
* 数值类型:整数或者小数
** 有符号   int8,int16,int32...
** 无符号   uint8,uint16....
** 浮点：float
* 字符串：string
*/
```  
+ 基本数据类型转换
    > 类型转换 类型(变量名)
    ```go
    var a int = 10
    var b float = float(a)  // 10.0
    ```
    > 注意事项
    + 常量自动转换
    + 变量转换要符合类型
### 字符串
> 字符串使用双引号""，反引号``  
> 转义某个字符，使用 反斜杠 **\\**
```go
var name = `"单身狗"` //"单身狗"
var name="\""        // "
```
### 运算符
+ 基本运算符
    > \+  -  *  /  %  ++  --  
    > ++/-- 只用用于单独的表达式
+ 关系运算符
    > == &nbsp;&nbsp;&nbsp;&nbsp;!= &nbsp;&nbsp;&nbsp;&nbsp;  > &nbsp;&nbsp;&nbsp;&nbsp;  >= &nbsp;&nbsp;&nbsp;&nbsp;  < &nbsp;&nbsp;&nbsp;&nbsp;  <=
+ 逻辑运算符
    > && &nbsp;&nbsp;&nbsp;&nbsp; || &nbsp;&nbsp;&nbsp;&nbsp;  !
+ 位运算符
    > &(与) &nbsp;&nbsp;&nbsp;&nbsp; |(非) &nbsp;&nbsp;&nbsp;&nbsp; ^(异或，取反) &nbsp;&nbsp;&nbsp;&nbsp; &^(清零)
### 键盘输入与输出
+ 输入（键盘输入）
    > fmt.Scanln,fmt.Scanf,bufio.NewReader(os.Stdin)
    ```go
    // 通过操作地址符来进行拦截输入
    fmt.Scanln(&a)
    fmt.Scanf("%s,%f\n",&x,&y)
    reader := bufio.NewReader(os.Stdin)
    name,_ := reader.ReaderString("\n") // _ 表示舍去某个变量

    ```
+ 输出
    > fmt.Println,fmt.Print,fmt.Printf
### 流程结构
+ 条件语句
    > **if** --- GO语言的if表达式是不需要括号来的，所以也就第一个**{**不能换行、else也不能换行,if语句是可以嵌套的
    ```go
    if 条件表达式 {
        /* 条件为true 则进入操作*/
    }
    // else
    if 条件表达式 {
        ...
    } else {
        ...
    }
    // 其他写法,num只能用于if中，在else也不能使用
    if num := 4; num>0{
        fmt.Println("num 为整数 ")
    }
    ```
    > **switch** --- 可以作用在**其他类型**变量，但是case必须和switch变量类型一致  
    > - case/default 无序的  
    > - case 后的值必须唯一  
    > - default 不是必须的  
    > - case 后可以用逗号写多个值进行匹配  
    > - 省略switch后面的变量，则就是作用在了bool上  
    > - break（每个case后默认） 强制打断case的执行 fallthrough 强制执行case 
    ```go
    switch var1 {
        case var1:
            ...
        case var2:
            ...
        case var3:
            ...
        case var4,var5: // 逗号隔开多个值
            ...
        default:
            ...
    }
    // 其他写法：省略switch后面的变量，则就是作用在了bool上
    switch {
        case true:
            ...
        case false:
            ...
    }
    switch 初始化变量; var1{    // 初始化变量 作用于只能在当前switch中
        case var1:
            ...
        case var2:
            ...
    }

    ``` 
+ 循环
    > **for** -- GO语言中循环只有for循环  
    > - for循环中的**三个表达式和分号**可以**省略** 类似于其他语言的while循环
    > - 当for循环中省略了表达式2，就相当于作用在true上。无限循环了
    > - 省略了表达式1，在外面定义初始化
    > - break 强制结束循环（跳出循环）  
    > - continue 结束当前循环，进入下一次循环
    > -  - 多层循环的时候,则结束最里层的循环  
    > -  - 可以给循环打标签，**break/continue 标签名** 
    ```go
    for init; condition; post{
        /* 循环体 */
        if i > 5 {
            break
            // continue
        }
    }
    // 给循环打标签
    out:for i :=1; i <= 10; i++ {
        for init; condition; post{
            if i > 5 {
                break out
                // continue out
            }
        }
    }
    ```
+ goto语句
    > 通常是调转到某行，配合**标签**来跳转
    ```go
    var a := 1
    LOOP:
    for a < 20 {
        if a == 10 {
            goto LOOP
        }
        fmt.Println("a:%d\n",a)
    } 
    ```
+ 生成随机数
    > 包 math.rand
    1. 设置种子数 rand.Send(num)  
    2. 设置随机数 rand.Int()
    ```go
    import "math/rand"
    import "time"
    var sead = time.Now().UnixNano()
    var num := rand.Int(sead)
    fmt.Println(randnum)
    ```
+ 数组
    > 定义：存储**相同数据类型**的容器，通过**下标**来获取其中的值
    1. len(数组名) 获取数组的长度，是容器中实际存储的数据量
    2. cap(数组名) 获取数组的容量，是容器中能够存储的最大数据量
    3. 指定下标地方存储值，**下标:值**
    4. 不知道长度使用 **[...]** 来自动计算
    5. 数组赋值给数组，则是通过值传递【实际是副本传递】
    ```go
    var 变量名 [size] 变量类型
    // exp:
    var arr [4] int 
    // var arr = [4] int
    arr[0] = 1
    arr[1] = 2
    // var arr = [4] int{1,2}
    // var arr = [4] int{1,2,4:4}   // 指定下标地方存储值，下标：值
    // arr :=[...] int{1,2.3}
    ```
    > 数组的遍历 
    1. for 循环
    2. for range
    ```go
    var arr := [4] int{1,2,3,4}
    // for range
    for index,value := range arr1 {
        // index 数组索引
        // value 数组索引对应的值
    }
    ```
    > 二维数组
    1. 二维数组中内存说明：  
        - 一维数组中是存储的二维里面的内存地址  
        - 二维中存储的是基本数据
    
    ```go
    var arr = [3][4] int{{1,2,3,4},{1,2,3,4},{1,2,3,4}}
    arr[0][0]   // 1    通过下标获取0,0的值
    ```


