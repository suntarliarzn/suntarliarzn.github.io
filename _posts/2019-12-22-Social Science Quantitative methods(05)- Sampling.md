---

title: Social Science Quantitative methods(05) - Sampling
key: D20191222

tags: Sampling; External Validity Threats; Probability Sampling; Non-probability Sampling; Sample Error; Sample Size

layout: article

---

# Sampling

<!--more-->

## 1. External Validity Threats

- Generalizablity

- Threats:

  - ### History Threat

    - the observed effect doesn't generalized to other time period.
    - **solution**: replicating the research in different time period.
    
  - ### Setting Threat
  
    - the observed effect only holds in a specific setting.
  
    - #### Artificiality
  
      - #### Pretesting
  
        - the observed effect is only found when a pretest is performed.
        - internal validity threat
          - measurement: testing
  
      - #### Reactivity
  
        - participants or experiments react to the fact that they are participating in a research study.
        - participant/experimenter expectancy
  
    - **solution**: replicating the research in different natural settings.
  
  - ### Selection Threat
  
    - the hypothesized relation only holds for a specific subset of people.
    - over/under-representation of a certain subset of people
    - **solution**: 
      - replicating the research in different subsets of people
      - random sampling

## 2. Sampling Concepts

- Sample样本

  - a subset of the entire population
  - the sample is used to represent, or estimate a property of the population

- Population总体

  - the entire collection of people or groups to whom the hypothesis is supposed to apply.

  - types:

    - universalistic 普世性
    - particularistic 特殊性

    ![](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/01%20quatitative%20methods/population.jpg)

  - Impossible to measure the  entire population

- Element/Unit 元素

  - the single entity in the population
  - all the elements form the population
  - most often consists of one person...

- Stratum 层

  - a subset of elements from the population that share a characteristic.

- Census 普查

  - an numeration or count of all elements in the population.
  - national census--government database

- Sampling frame 抽样框

  - a list of all the elements in a population that can be individually identified.
  - a sampling frame provides a way of actually **contacting elements**.
    - a phone book
    - a list of email addresses
  - a sampling frame doesn't always include all elements of a population due to:
    - clerical errors 笔误
    - an outdated list

  


## 3. Probability Sampling 概率抽样

- minimizes the selection threat to external validity

- the **essential features** of probability sampling:

  ```mermaid
  graph TD
  A[Population]--random selection-->B[Representative Sample]
  B--random assignment-->C[Experimental Group]
  B--random assignment -->D[Control Group]
  ```

  

  1. for each element the probability is known and non-zero

  2.  sampling frame is necessary

  3. reducing the risk of over-/under-representation

  4. allow us to assess the accuracy estimate

     - confidence interval 置信区间

       ![confidence interval](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/01%20quatitative%20methods/confidence%20interval.jpg)

  

## 4. Probability Sampling - Simple

1. ### Simple Random Sampling 简单随机抽样

   - each element in the sampling frame has **an equal and independent probability of being included in the sample**.
   - **Independent**: the selection of any single element does not depend on another element being selected first.
     - shuffle the cards of number
     - random number tables
     - computer generation

2. ### Systematic Sampling 系统抽样

   - **Randomly select the first element**
   - the other elements are selected by systematically skipping a certain number of elements
   - Probabilities not independent
   - **!! there is no pattern in the elements!!**

   ![systematic sampling](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/01%20quatitative%20methods/systematic%20sampling.jpg)

   

## 5. Probability Sampling - Complex

- ### Stratified Random Sampling 分层随机抽样(Slicing 切片)

  - Steps:

    1. Divide the population into mutually exclusive strata
    2. Sample from each stratum separately using simple random sampling.
    3. The separately sampled elements are added together to form the final sample.

  - Reasons:

    1.  at least in terms of the sampled strata, our sample is representative.
       - Sub-populations are represented in the sample in exactly the same proportion as they appear in the population. 子总体完全按照在总体中所占的比例表现在样本中。
    2.  it can make sample more efficient
       - smaller margin of error with the same sample

    ![Stratified Random Sampling](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/01%20quatitative%20methods/stratified%20random%20sampling.jpg)

  - **!!Note!!**:

    - the size of our sub-samples does not have to correspond to the size of the strata.
    - we can calculate a representative estimate by weighting the sub-samples according to stratum size. 我们可以根据抽样层样本量对子样本加权来算得一个有代表性的估计值。
    - the sample value is representative, efficient and more likely to be accurate.

    ![slicing](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/01%20quatitative%20methods/slicing.jpg)

- ### Multi-stage Cluster Sampling 多阶段整体抽样

  - to randomly sample in stages by first selecting clusters of elements.

    首先选定元素集群再分阶段随机抽样。

  - Example: Math performance in the population of all Dutch students currently in their third year of secondary education. 全荷兰初中三年级学生数学成绩

    - Stage 1:  a sampling frame of all school districts and randomly select a very small sample of school districts.
    - Stage 2: randomly select schools from the previously selected districts.  
    - Stage 3: randomly select classes from the previously selected schools.
    - Stage 4: randomly select students from the previously selected classes.    

  - Stratification can be used in all of these stages.

  - **!!Note!!**:

    - the margin of error is hard to determine because the probability to be included in the  sample is no longer the same for all elements. (why?)

## 6. Non-Probability Sampling

   - In non-probability sampling, some elements in the population either 0 probability to be selected, or their probability is unknown.

   - Can not accurately determine the margin of error/representative of the population.

   - common types:

     1. ### Convenience Sampling 便利抽样

        - Elements are selected that are the most convenient, the most easily accessible.
        - **Bias**: fail to determine how closely the sample value is likely to approach the population value.
        - **Benefit:** sometimes, it's impossible/ too expensive to obtain a sampling frame.

     2. ###  Snowball Sampling 滚雪球抽样

        - Initially, a small group of participants is recruited. Then, **the sample is extended by asking the initial participants to provide contact information for possible new participants.**  
        - **Benefit**: useful for hard to reach, closed community populations.

     3. ###  Purposive Sampling 立意抽样

        - Elements are specifically chosen based on the judgment of the researcher.
        - **Typical elements for the population based on judgment of researcher.**

     4. ###  Quota Sampling 定额抽样

        - Similar to stratified random sampling
        - But instead of randomly selecting elements from each stratum, **participants for each category are selected using convenience sampling.**

## 7. Error 误差

   - **Error**: the difference between sample and population value 

   - types:

     - ### Sampling Error 抽样误差

       - due to incomplete subset of population
       - A confidence interval allows us to say that with repeated sampling, in a certain percentage of these samples, the true population value will differ from the sample value by no more than the margin of error. 在重复抽样时，对一定比例的样本而言，总体真值与样本值的差异不会超过误差范围。
       - Influenced by:
         - **Sample size:** As sample size increases, sampling error smaller.
         - **The amount of variation 变异数量**: sampling error will be larger in a population that shows more variation.
       - We can estimate how large the sampling error will be in a long run.
     - **only if: sample = random sample of population.**
     
   - ### Non-Sampling Error
     
       - due to sources other than sampling error.
       
       - systematic/random
       
       - types:
       
         - #### Sampling bias 抽样偏差
       
           - under or over representation of certain elements in the population
             - some elements have a much smaller or larger chance to be selected than was intended.
             - certain elements have no chance to be selected at all.
           - **with non-probability sampling, the risk of sampling bias is strong.**
       
         - #### Non response 无回答
       
           - a lack of response to invitations; the explicit refusal to participate in a study; participants drop out during the study; data are invalid.
           - random/systematic error
             - systematic error:
               - sometimes specific subgroups in a population are less likely to participate.
       
         - #### Incomplete/inaccurate sampling frame
       
           - frame out of date
       
         - #### Error in the data collection
       
           1. errors in the instrument
              - poorly worded questions 
              - untrained observers
           2. errors in the procedure
              - giving inaccurate instructions
              - a failure of equipment
              - distraction by fellow participants during data collection
       
         - #### Error in processing data
       
           - data entry errors
           - responses need to be recoded or aggregated in the data file.

## 8. Sample Size

![Sample Size](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/01%20quatitative%20methods/the%20bigger%20the%20better.jpg)

- But as the sample size grows, the decrease in the margin of error becomes smaller and smaller.

- **At a certain point, the cost of collecting more elements outweighs the decrease in the margin of error.** 达到某个点时， 收集更多元素的代价 会超过减少误差范围所带来的好处。

- Other factors to consider:

  - **the variability of the population 总体多样性**

    - homogeneity vs. heterogeneity

      ![homogeneity vs. heterogeneity](https://suntarliarzn-1258316859.cos.ap-chongqing.myqcloud.com/social%20science/01%20quatitative%20methods/homogene%20heterogene.jpg)

      - **Heterogeneity or strong variation** in the population on the property of interest results in a larger margin of error if all other things being equal. If values in the population vary widely then a sample is more likely to accidentally over or under estimate the true population value. 总体在目标属性上的异质性或强烈的多样性，在其他条件相同时，也会导致更大的误差范围 。如果总体内各值之间差异幅度太大，样本偶然高估或低估总体真实值的机率则大大增加。

  - Non response

    - response rate to compensate the expected loss of elements:
      - previous  or comparable research

- Margin of error

  - we or a computer can now calculate exactly what sample size we obtain this margin of error(5%) at this confidence level(95%).
  - **!!Requires!!**:
    - random sampling
    - estimate of the variability in the population:
      - previous studies
      - old census data
      - a best guess