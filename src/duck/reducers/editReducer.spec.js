import reducer from './editReducer'
import * as actions from '../actions'

describe('reducer', () => {
  it('is true', () => {
    expect(true).toEqual(true)
  })

  it('can create a new note', () => {
    const state = {
      id: '33',
      body: 'foo',
      tagIDs: ['15', '22'],
      newTags: [{ id: '73', name: 'test1', isTopic: false }]
    }
    const newState = reducer(state, {
      type: actions.createNote
    })
    expect(newState.id).toHaveLength(7)
    expect(newState.body).toEqual('')
    expect(newState.tagIDs).toEqual([])
    expect(newState.newTags).toEqual([])
  })

  it('can load a note', () => {
    const state = {
      id: '33',
      body: 'foo',
      tagIDs: ['15', '22'],
      newTags: [{ id: '73', name: 'test1', isTopic: false }]
    }
    const newState = reducer(state, {
      type: actions.loadNote,
      payload: {
        id: '1234567',
        body: 'load this note',
        tagIDs: ['55', '66'],
      }
    })
    expect(newState).toEqual({
      id: '1234567',
      body: 'load this note',
      tagIDs: ['55', '66'],
      newTags: []
    })
  })

  it('can update the note body', () => {
    const state = {
      id: '33',
      body: 'foo',
      tagIDs: ['15', '22'],
      newTags: [{ id: '73', name: 'test1', isTopic: false }]
    }
    const newState = reducer(state, {
      type: actions.updateNoteBody,
      payload: 'BAZ'
    })
    expect(newState).toEqual({
      id: '33',
      body: 'BAZ',
      tagIDs: ['15', '22'],
      newTags: [{ id: '73', name: 'test1', isTopic: false }]
    })
  })

  it('can update tag records after saving', () => {
    const state = {
      id: '33',
      body: 'foo',
      tagIDs: ['15', '22'],
      newTags: [{ id: '73', name: 'test1', isTopic: false }]
    }
    const newState = reducer(state, {
      type: actions.updateTagsAfterSaving,
      payload: {
        tagIDs: ['15', '22'],
        newTags: [{ id: '73', name: 'test1', isTopic: false }]
      }
    })
    expect(newState).toEqual({
      id: '33',
      body: 'foo',
      tagIDs: ['15', '22', '73'],
      newTags: []
    })
  })


  // missing: test if getHasTopic works.  
  it('can add a tagID', () => {
    const state = {
      id: '33',
      body: 'foo',
      tagIDs: ['15', '22'],
      newTags: [{ id: '73', name: 'test1', isTopic: false }]
    }
    const newState = reducer(state, {
      type: actions.pickTag,
      payload: '456'
    })
    expect(newState).toEqual({
      id: '33',
      body: 'foo',
      tagIDs: ['15', '22', '456'],
      newTags: [{ id: '73', name: 'test1', isTopic: false }]
    })
  })

  it('can add a new tag', () => {
    const state = {
      id: '33',
      body: 'foo',
      tagIDs: ['15', '22'],
      newTags: [{ id: '73', name: 'test1', isTopic: false }]
    }
    const newState = reducer(state, {
      type: actions.addNewTag,
      payload: {
        tagName: 'Brobnar',
        isTopic: true
      }
    })
    expect(newState.id).toEqual('33')
    expect(newState.body).toEqual('foo')
    expect(newState.tagIDs).toEqual(['15', '22'])
    expect(newState.newTags[0]).toEqual({ id: '73', name: 'test1', isTopic: false })
    expect(newState.newTags[1].id).toMatch(/[a-zA-Z0-9]{7}/)
    expect(newState.newTags[1].name).toEqual('Brobnar')
    expect(newState.newTags[1].isTopic).toEqual(true)
  })

})

