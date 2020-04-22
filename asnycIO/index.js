


process.nextTick(()=>{
  console.log('nextTick1')
})

setImmediate(()=>{
  console.log('setImmediate1')
  process.nextTick(()=>{
    console.log('强势插入')
  })
})


process.nextTick(()=>{
  console.log('nextTick2')
})



setImmediate(()=>{
  console.log('setImmediate2')
  
})

console.log('正常')