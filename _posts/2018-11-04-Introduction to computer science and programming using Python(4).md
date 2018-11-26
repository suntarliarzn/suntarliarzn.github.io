---

title: Introduction to Computer Science and Programming Using Python(4)

key: B20181104

tags: testing; bugs; debugging

layout: article
---

# Week Four: Good Programming Practices

<!--more-->

1. ## Testing and Debugging

![mark](http://pdg2co4cr.bkt.clouddn.com/blog/181104/6F50HCa59i.jpg?imageslim)

2.  ## Classes of Tests
3.  ## Bugs
4.  ## Debugging
5.  ## Exceptions
6.  ## Assertion

- break program into **modules**

- **document constraints **on modules

- #### document assumptions

- ![mark](http://pdg2co4cr.bkt.clouddn.com/blog/181104/KjFHjc5b0A.png?imageslim)

- ![mark](http://pdg2co4cr.bkt.clouddn.com/blog/181104/c81a5ahGke.png?imageslim)

- ![mark](http://pdg2co4cr.bkt.clouddn.com/blog/181104/el1J4IHFbl.png?imageslim)

- ![mark](http://pdg2co4cr.bkt.clouddn.com/blog/181104/IdAIc3bCif.png?imageslim)

- ![mark](http://pdg2co4cr.bkt.clouddn.com/blog/181104/ej513cAg2L.png?imageslim)



3.  ## Bugs

- ![mark](http://pdg2co4cr.bkt.clouddn.com/blog/181104/KA1bcihj8D.png?imageslim)


4.  ## Debugging


- ![mark](http://pdg2co4cr.bkt.clouddn.com/blog/181104/b77ijlb0Kk.png?imageslim)

- ![mark](http://pdg2co4cr.bkt.clouddn.com/blog/181104/I7g5DlBiiA.png?imageslim)

- ![mark](http://pdg2co4cr.bkt.clouddn.com/blog/181104/jJI1F16Idf.png?imageslim)

- ![mark](http://pdg2co4cr.bkt.clouddn.com/blog/181104/6DF8I7KfG8.png?imageslim)

- ![mark](http://pdg2co4cr.bkt.clouddn.com/blog/181104/aC556Bh7b8.png?imageslim)

- ![mark](http://pdg2co4cr.bkt.clouddn.com/blog/181104/dCbAgKGF1m.png?imageslim)

1. 
   ## 4. Debugging Skills


- ![mark](http://pdg2co4cr.bkt.clouddn.com/blog/181104/D50E0LfibE.png?imageslim)
- ![mark](http://pdg2co4cr.bkt.clouddn.com/blog/181104/HBKjKa22cH.png?imageslim)
- ![mark](http://pdg2co4cr.bkt.clouddn.com/blog/181104/bDg14dhG6f.png?imageslim)



5.  ## Exceptions


- ##### Syntax: try;except;finally

  ```python
  try:
      a = int(input("tell me one number:"))
      b = int(input("tell me another number:"))
      print(a/b)
      print('okay')
  except ValueError:
      print('Bug in user input.')
  except ZeroDivisionError:
      print("Can't divide by zero")
  finally
  	print('Close')
  print('outside')
  
  
  ```

- ##### Syntax: raise

  我们可以使用raise语句自己触发异常。

  ```python
  # 定义函数
  def mye( level ):
      if level < 1:
          raise Exception,"Invalid level!"
          # 触发异常后，后面的代码就不会再执行
  try:
      mye(0)            # 触发异常
  except Exception,err:
      print 1,err
  else:
      print 2
  ```



6.  ## Assertion

- Use an assert statement to raise an `AssertionError` exception if assumptions not met.

- ```python
  def avg(grades):
      assert not len(grades) == 0, 'no grades data'
      return sum(grades)/len(grades)#raises an AssertionError if it is given an empty list for grades; otherwise runs ok
  ```

- typically used to **check inputs**

- ![mark](http://pdg2co4cr.bkt.clouddn.com/blog/181118/DmjhKiG7f2.jpg?imageslim)
